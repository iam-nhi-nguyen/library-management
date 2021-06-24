app.controller("borrowerCtrl", function ($scope, $http) {
    var controller = this;
    controller.borrowers = [];

    $scope.getBorrowers = function() {
        $http({method: "GET", url: "/api/borrower"})
            .then(
                function (response) { controller.borrowers = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    $scope.deleteStudent = function(id) {
        confirm("Bạn chắc chắn muốn xóa thành viên này?");
        $http({method: "DELETE", url:"/api/borrower/" + id,
            transformResponse: function(data) {
                return data;
            },

        })
            .then(
                function (response) { $scope.getBorrowers(); },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    $scope.getBorrowers();
});