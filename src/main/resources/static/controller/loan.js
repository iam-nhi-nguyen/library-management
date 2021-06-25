app.controller("loanCtrl", function ($scope, $http) {

    $scope.loans = [];

    $scope.getLoans=function () {
        $http({method: "GET", url: "/api/loan/all?query="})
            .then(
                function (response) {
                    $scope.loans = response.data;
                }
            )
            .catch(function (response) {
                console.log("Error" + ":" + response.error + ":" + response.data);
            })
    }
    $scope.updateLoan=function (x) {
        $http({method: "PUT", url: "api/loan/" + x.id, x})
            .then(
                function (response) {
                    alert("update phiếu ghi thành công");
                    $scope.getLoans();
                    },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    $scope.addLoan=function(){
        $http({method: "POST", url: "api/loan",
            transformResponse: function(data) {
                return data;
            },
            data: {
                "borrowerId":$scope.borrowerId,
                "bookId":    $scope.bookId,
            }})
            .then(
                function (response) {
                    alert("Thêm phiếu ghi thành công");
                    $scope.getLoans();
                },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    $scope.searchByID=function(id){
        id = id == null ? "" : id;
        if(id==""){
            $scope.getLoans();
        }
        if(id!="")
        {
            $http({method: "GET", url: "api/loan/"+id })
                .then(
                    function (response) { $scope.loans = [response.data];},
                    function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
                )
        }

    }

    $scope.clearInputs = function(){
        $scope.bookId=null;
        $scope.borrowerId=null;
    }



    $scope.getLoans();

});