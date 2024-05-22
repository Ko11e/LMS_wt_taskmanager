document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // secelt initialzation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initialzation
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});