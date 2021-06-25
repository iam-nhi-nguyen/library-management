app.controller("bookAuthorCtrl", function ($scope, $http) {
    var controller = this;
    controller.entity_list   = [];
    controller.in_edit_mode  = false;
    controller.chosen_entity = null;

    controller.title  = null;
    controller.category = null;
    controller.available = true;

    controller.search_title  = null;
    controller.search_category = null;
    controller.search_available = true;

    $(document).ready(function() {
        $('.modal').modal();
        $('.chips').chips();
    })

    controller.getAll = function() {
        $http({method: "GET", url: "/api/book"})
            .then(
                function (response) { controller.entity_list = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    controller.getAll();

    controller.delete = function(id) {
        if (confirm("Bạn chắc chắn muốn xóa quyển sách này?") === true) {
            $http({method: "DELETE", url:"/api/book/" + id,
                transformResponse: function(data) {
                    return data;
                },})
                .then(
                    function (response) { controller.getAll(); },
                    function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
                )
        }
    }

    controller.openAdd = function() {
        controller.in_edit_mode  = false;
        controller.chosen_entity = null;
        controller.title  = null;
        controller.category = null;
        controller.available = true;
    }

    controller.add = function() {
        if (controller.title == null) {
            M.toast({html: "Thiếu tiêu đề!"})
        } else {
            $http({
                method: "POST", url: "/api/book",
                data: {
                    "title" : controller.title,
                    "category": controller.category,
                    "available": controller.available,
                }
            })
                .then(
                    function (response) { controller.getAll(); },
                    function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
                )
        }
    }

    controller.openUpdate = function(x) {
        controller.in_edit_mode = true;
        controller.chosen_entity = x;
        controller.title  = x.title;
        controller.category = x.category;
        controller.available = x.available;
        $(function() { M.updateTextFields(); });
    }

    controller.update = function() {
        var updated_data = controller.chosen_entity;
        updated_data.title = controller.title;
        updated_data.category = controller.category;
        updated_data.available = controller.available;
        $http({method: "PUT", url: "/api/book/" + controller.chosen_entity.id, data: updated_data})
            .then(
                function (response) { controller.in_edit_mode = false; controller.getAll(); },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    controller.quickSearch = function(quick_search) {
        let input = quick_search == null ? "" : quick_search;
        let query = `title=='*${input}*',category=='*${input}*'`;
        if (/^\d+$/.test(input)) {
            query = query.concat(`,id==${parseInt(input)}`)
        }
        $http({method: "GET", url: `api/book/search?query=${query}`})
            .then(
                function (response) { controller.entity_list = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    controller.search = function() {
        let title  = controller.search_title  == null ? "" : controller.search_title ;
        let category = controller.search_category == null ? "" : controller.search_category;
        let available = controller.search_available;
        let query = `title=='*${name}*';category=='*${category}*';available==${available}`;
        $http({method: "GET", url: `api/book/search?query=${query}`})
            .then(
                function (response) { controller.entity_list = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }
});