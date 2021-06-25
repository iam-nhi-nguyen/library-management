app.controller("loanCtrl", function ($scope, $http) {
    var controller = this;
    controller.entity_list   = [];
    controller.chosen_entity = null;

    controller.bookId  = null;
    controller.borrowerId = null;

    controller.search_bookId  = null;
    controller.search_borrowerId = null;

    $(document).ready(function() {
        $('.modal').modal();
    })

    controller.getAll = function() {
        $http({method: "GET", url: "/api/loan/all?query="})
            .then(
                function (response) { controller.entity_list = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    controller.getAll();

    controller.openAdd = function() {
        controller.chosen_entity = null;
        controller.bookId  = null;
        controller.borrowerId = null;
    }

    controller.add = function() {
        controller.bookId  = controller.bookId == null ? "" : controller.bookId;
        controller.borrowerId  = controller.borrowerId == null ? "" : controller.borrowerId;
        if (controller.bookId == "" || controller.borrowerId == "") {
            M.toast({html: "Thiếu ID sách hoặc ID độc giả!"})
        } else {
            let existing = true;
            console.log(controller.bookId)
            $http({method: "GET", url: "/api/book/search?query=id==" + controller.bookId,})
                .then(
                    function (response) {
                        console.log(response.data);
                        if (response.data.length == 0) {
                            existing = false;
                            M.toast({html: "ID Sách không tồn tại!"});
                        }
                    },
                    function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
                )
            $http({method: "GET", url: "/api/borrower/search?query=id==" + controller.borrowerId,})
                .then(
                    function (response) {
                        if (response.data.length == 0) {
                            existing = false;
                            M.toast({html: "ID Độc giả không tồn tại!"});
                        }
                    },
                    function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
                )
            if (existing) {
                $http({
                    method: "POST", url: "/api/loan",
                    data: {
                        "bookId": controller.bookId,
                        "borrowerId": controller.borrowerId,
                    }
                })
                    .then(
                        function (response) {
                            controller.getAll();
                        },
                        function (response) {
                            console.log("Error" + ":" + response.error + ":" + response.data);
                        }
                    )
            }
        }
    }

    controller.update = function(x) {
        $http({method: "PUT", url: "/api/loan/" + x.id, data: x})
            .then(
                function (response) { controller.getAll(); },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    controller.quickSearch = function(quick_search) {
        let input = quick_search == null ? "" : quick_search;
        if (/^\d+$/.test(input)) {
            input = parseInt(input);
            let query = `id==${input}`;
            $http({method: "GET", url: `api/loan/search?query=${query}`})
                .then(
                    function (response) { controller.entity_list = response.data; },
                    function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
                )
        } else {
            controller.getAll();
        }
    }

    controller.search = function() {
        controller.search_bookId  = controller.search_bookId == null ? "" : controller.search_bookId;
        controller.search_borrowerId  = controller.search_borrowerId == null ? "" : controller.search_borrowerId;
        let query = "";
        if (controller.search_bookId != "" && /^\d+$/.test(controller.search_bookId)) {
            query = query.concat(`bookId==${parseInt(controller.search_bookId)};`)
        }
        if (controller.search_borrowerId != "" &&/^\d+$/.test(controller.search_borrowerId)) {
            query = query.concat(`borrowerId==${parseInt(controller.search_borrowerId)};`)
        }
        query = query.replace(/;$/,"");
        $http({method: "GET", url: `api/loan/search?query=${query}`})
            .then(
                function (response) {
                    controller.entity_list = response.data;
                    for (let i = 0; i < controller.entity_list.length; i++) {
                        $http({method: "GET", url: `api/loan/${controller.entity_list[i].id}`})
                            .then(
                                function(response) {controller.entity_list[i] = response.data; },
                                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
                            )
                    }
                },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    // $scope.getLoans=function () {
    //     $http({method: "GET", url: "/api/loan/all?query="})
    //         .then(
    //             function (response) {
    //                 $scope.loans = response.data;
    //             }
    //         )
    //         .catch(function (response) {
    //             console.log("Error" + ":" + response.error + ":" + response.data);
    //         })
    // }
    // $scope.updateLoan=function (x) {
    //     $http({method: "PUT", url: "api/loan/" + x.id, x})
    //         .then(
    //             function (response) {
    //                 alert("update phiếu ghi thành công");
    //                 $scope.getLoans();
    //                 },
    //             function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
    //         )
    // }
    //
    // $scope.addLoan=function(){
    //     $http({method: "POST", url: "api/loan",
    //         transformResponse: function(data) {
    //             return data;
    //         },
    //         data: {
    //             "borrowerId":$scope.borrowerId,
    //             "bookId":    $scope.bookId,
    //         }})
    //         .then(
    //             function (response) {
    //                 alert("Thêm phiếu ghi thành công");
    //                 $scope.getLoans();
    //             },
    //             function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
    //         )
    // }
    //
    // $scope.searchByID=function(id){
    //     id = id == null ? "" : id;
    //     if(id==""){
    //         $scope.getLoans();
    //     }
    //     if(id!="")
    //     {
    //         $http({method: "GET", url: "api/loan/"+id })
    //             .then(
    //                 function (response) { $scope.loans = [response.data];},
    //                 function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
    //             )
    //     }
    //
    // }
    //
    // $scope.clearInputs = function(){
    //     $scope.bookId=null;
    //     $scope.borrowerId=null;
    // }
    //
    //
    //
    // $scope.getLoans();

});