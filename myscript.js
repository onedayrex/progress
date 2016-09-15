NProgress.configure({ showSpinner: false });
$(document).ready(function () {
    NProgress.start();
});
$(window).load(function () {
    NProgress.done();
});
$(document).ajaxStart(function () {
    NProgress.start();
}).ajaxStop(function () {
    NProgress.done();
});
