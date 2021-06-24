app.controller("borrowerCtrl", function ($scope, $http) {
    var controller = this;
    controller.borrowers = [];
    controller.in_edit_mode = false;
    controller.chosen_id = null;
    controller.chosen_borrower = null;

    $scope.getBorrowers = function() {
        $http({method: "GET", url: "/api/borrower"})
            .then(
                function (response) { controller.borrowers = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    $scope.deleteBorrower = function(id) {
        if (confirm("Bạn chắc chắn muốn xóa thành viên này?") === true) {
            $http({method: "DELETE", url:"/api/borrower/" + id,
                transformResponse: function(data) {
                    return data;
                },})
                .then(
                    function (response) { $scope.getBorrowers(); },
                    function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
                )
        }
    }

    $scope.clearBorrowerInputs = function() {
        $scope.name  = null;
        $scope.email = null;
        $scope.phone = null;
        $scope.positionId = "";
    }

    $scope.addBorrower = function() {
        if ($scope.name == null || $scope.positionId == null) {
            M.toast({html: "Thiếu tên hoặc chức vụ!"})
        } else {
            $http({
                method: "POST", url: "/api/borrower",
                data: {
                    "name": $scope.name,
                    "email": $scope.email,
                    "phone": $scope.phone,
                    "positionId": $scope.positionId,
                }
            })
                .then(
                    function (response) {
                        $scope.getBorrowers();
                        $scope.clearBorrowerInputs();
                    },
                    function (response) {
                        console.log("Error" + ":" + response.error + ":" + response.data);
                    }
                )
        }
    }

    $scope.enterEditMode = function(x) {
        controller.in_edit_mode = true;
        controller.chosen_id = x.id;
        controller.chosen_borrower = x;
        $scope.name  = x.name ;
        $scope.email = x.email;
        $scope.phone = x.phone;
        $scope.positionId  = x.positionId ; // issue here
    }

    $scope.exitEditMode = function() {
        controller.in_edit_mode = false;
        controller.chosen_id = null;
        controller.chosen_borrower = null;
        $scope.clearBorrowerInputs();
    }

    $scope.updateBorrower = function() {
        var updated_data = controller.chosen_borrower;
        updated_data.name = $scope.name;
        updated_data.email = $scope.email;
        updated_data.phone = $scope.phone;
        updated_data.positionId = $scope.positionId;

        $http({method: "PUT", url: "/api/borrower/" + controller.chosen_id, data: updated_data})
            .then(
                function (response) {
                    $scope.exitEditMode()
                    $scope.getBorrowers();
                    $scope.clearBorrowerInputs();
                },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    $scope.getBorrowers();
});