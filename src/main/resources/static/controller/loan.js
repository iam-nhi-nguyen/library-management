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
        $http({method: "PUT", url: "api/loan" + id,
            transformResponse: function(data) {
                return data;
            },
            data: {

            }})
            .then(
                function (response) { $scope.getLoans(); },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }
    $scope.searchByID=function(input_string){
        input_string = input_string == null ? "" : input_string;

    }

    $scope.getLoans();

});