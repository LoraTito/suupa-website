function showHeader() {
    $(document).scroll(function() {
        var navBar = document.getElementById('header'); // selects the element by Id

        if($(window).scrollTop() === 0) {
            navBar.className =  ('header');

            // $("#header").classList.add("show-header");

            document.getElementById("header").classList.remove("show-header");
        } else {
            navBar.className = ('header-scroll');

            // document.getElementById("header").classList.add("show-header");
            // $("#header").classList.remove("show-header");
            // $("#header").classList.add("show-header");

        }
    });

    // var element = document.getElementById("header");
    // element.classList.add("show-header");
}

// window.onscroll = function changeClass(){
//     var scrollPosY = window.pageYOffset | document.body.scrollTop;
//     var navBar = document.getElementById('header'); // selects the element by Id
//     var secondSection = document.getElementById('second-section');  // selects the element by Id.
//     var secondSectionTop = aboutSection.getBoundingClientRect().top; //selects the Y position of the element in the view
//     var navBarHeight = navBar.getBoundingClientRect().height; //select the height of the navBar
//     if(secondSectionTop <= navBarHeight) {
//         navBar.className = ('test');
//     } else if(aboutSectionTop >= navBarHeight) {
//         navBar.className =  ('basic-classname');
//     }
// }