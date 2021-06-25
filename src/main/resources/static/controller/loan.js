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
    $scope.updateLoan=function (id) {
        let d = new Date();
        let n = d.getMilliseconds();
        $http({method: "PUT", url: "api/loan" + id,
            transformResponse: function(data) {
                return data;
            },
            data: {
                "borrowerId":$scope.borrowerId,
                "bookId":     $scope.bookId,
                "timeReturn": n,
            }})
            .then(
                function (response) {
                    $scope.getLoans();
                    alert("update thanh cong");
                    },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    $scope.addLoan=function(){
        let d = new Date();
        let n = d.getTime();
        $http({method: "POST", url: "api/loan",
            transformResponse: function(data) {
                return data;
            },
            data: {
                "borrowerId":$scope.borrowerId,
                "bookId":    $scope.bookId,
                "timeBorrow": n,
            }})
            .then(
                function (response) {
                    $scope.getLoans();
                },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    $scope.searchByID=function(input_string){
        input_string = input_string == null ? "" : input_string;
        $http({method: "POST", url: "api/loan", data: {"name": input_string} })
            .then(
                function (response) { $scope.loans = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }
    $scope.clearInputs = function(){
        $scope.bookId=null;
        $scope.borrowerId=null;
    }


    $scope.getLoans();

});