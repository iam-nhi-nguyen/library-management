app.controller("borrowerCtrl", function ($scope, $http) {
    var controller = this;
    controller.entity_list   = [];
    controller.in_edit_mode  = false;
    controller.chosen_entity = null;

    controller.name  = null;
    controller.email = null;
    controller.phone = null;
    controller.positionId = null;
    controller.positions  = [null, 'Sinh viên', 'Giảng viên'];

    controller.search_name  = null;
    controller.search_email = null;
    controller.search_phone = null;
    controller.search_positions = [null, true, true];

    $(document).ready(function() {
        $('select').formSelect();
        $('.modal').modal();
    })

    controller.getAll = function() {
        $http({method: "GET", url: "/api/borrower"})
            .then(
                function (response) { controller.entity_list = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    controller.getAll();

    controller.delete = function(id) {
        if (confirm("Bạn chắc chắn muốn xóa thành viên này?") === true) {
            $http({method: "DELETE", url:"/api/borrower/" + id,
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
        controller.name  = null;
        controller.email = null;
        controller.phone = null;
        controller.positionId = null
        $('#position').val("");
        $('#position').formSelect('destroy');
        $('#position').formSelect();
    }

    controller.add = function() {
        if (controller.name == null || controller.positionId == null) {
            M.toast({html: "Thiếu tên hoặc chức vụ!"})
        } else {
            $http({
                method: "POST", url: "/api/borrower",
                data: {
                    "name" : controller.name,
                    "email": controller.email,
                    "phone": controller.phone,
                    "positionId": controller.positionId,
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
        controller.name  = x.name;
        controller.email = x.email;
        controller.phone = x.phone;
        controller.positionId = x.positionId;
        $(function() { M.updateTextFields(); });
        $('#borrower-position').val(x.positionId);
        $('#borrower-position').formSelect('destroy');
        $('#borrower-position').formSelect();
    }

    controller.update = function() {
        var updated_data = controller.chosen_entity;
        updated_data.name = controller.name;
        updated_data.email = controller.email;
        updated_data.phone = controller.phone;
        updated_data.positionId = controller.positionId;
        $http({method: "PUT", url: "/api/borrower/" + controller.chosen_entity.id, data: updated_data})
            .then(
                function (response) { controller.in_edit_mode = false; controller.getAll(); },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    controller.quickSearch = function(quick_search) {
        let input = quick_search == null ? "" : quick_search;
        let query = `name=='*${input}*',email=='*${input}*',phone=='*${input}*'`;
        $http({method: "GET", url: `api/borrower/search?query=${query}`})
            .then(
                function (response) { controller.entity_list = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }

    controller.search = function() {
        let name  = controller.search_name  == null ? "" : controller.search_name ;
        let email = controller.search_email == null ? "" : controller.search_email;
        let phone = controller.search_phone == null ? "" : controller.search_phone;
        console.log(controller.positions);
        let positions = "(";
        if (controller.search_positions[1]) { positions = positions.concat("1,"); }
        if (controller.search_positions[2]) { positions = positions.concat("2,"); }
        positions = positions.replace(/,$/,"");
        positions = positions.concat(")")
        let query = `name=='*${name}*';email=='*${email}*';phone=='*${phone}*';positionId=in=${positions}`;
        console.log(query);
        $http({method: "GET", url: `api/borrower/search?query=${query}`})
            .then(
                function (response) { controller.entity_list = response.data; },
                function (response) { console.log("Error" + ":" + response.error + ":" + response.data); }
            )
    }
});