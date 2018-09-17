function showHeader() {
    $(document).scroll(function() {
        var navBar = document.getElementById('header');
        var logo = document.getElementById('suupa-logo');

        if($(window).scrollTop() === 0) {
            navBar.className =  ('header');
            logo.className = ('suupa-logo');
            document.getElementById("header").classList.remove("show-header");
            document.getElementById("suupa-logo").classList.remove("small-logo");
        } else {
            navBar.className = ('header-scroll');
            logo.className = ('small-logo');
        }
    });
}

function myFunction(x) {
    document.getElementById("mobile-menu").classList.remove("mobile-nav");
    x.classList.toggle("change");
}
