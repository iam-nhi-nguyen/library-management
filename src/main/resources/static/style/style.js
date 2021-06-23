var instance_tabs;

function materialize_init_tab() {
    var elem = document.querySelector('.tabs');
    var init_tabs = M.Tabs.init(elem, {duration: 300});
    instance_tabs = M.Tabs.getInstance(elem);
}

document.addEventListener('DOMContentLoaded', function () {
    materialize_init_tab();
});