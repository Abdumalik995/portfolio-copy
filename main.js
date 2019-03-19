$(document).ready(function() {
    $("nav ul li").click(function() {
        var forid = $(this).attr("class");
        console.log("ishlaey");
        if (forid == "a") {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            $('header').removeClass('nice_nav');
        } else if (forid == "b") {
            $('html, body').animate({
                scrollTop: 850
            }, 500);
        } else if (forid == "c") {
            $('html, body').animate({
                scrollTop: 1700
            }, 700);
        } else if (forid == "d") {
            $('html, body').animate({
                scrollTop: 2270
            }, 900)
        } else if (forid == "e") {
            $('html, body').animate({
                scrollTop: 3600
            }, 1000);
        } else {}
    });
    $("#icn ul li").click(function() {
        var forc = $(this).attr("class");
        console.log("ishlaey");
        if (forc == "a") {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            $('header').removeClass('nice_nav');
        } else if (forc == "b") {
            $('html, body').animate({
                scrollTop: 700
            }, 500);
        } else if (forc == "c") {
            $('html, body').animate({
                scrollTop: 1330
            }, 700);
        } else if (forc == "d") {
            $('html, body').animate({
                scrollTop: 2050
            }, 900)
        } else if (forc == "e") {
            $('html, body').animate({
                scrollTop: 3350
            }, 1000);
        } else {}
    });
    $(document).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        var about = $('#info').offset().top;
        var service = $('#plus').offset().top;
        var works = $('#workP').offset().top;
        var hire = $('#con').offset().top;
        if (scrollPosition >= 60 && scrollPosition < about) {
            $('header').addClass('nice_nav');
            if (scrollPosition == 10) {
                $('header').toggleClass('nice_nav');
            }
            $('nav ul li [data-id=home]').addClass('add');
        } else if (scrollPosition > about && scrollPosition < service) {
            $('nav ul li .add').removeClass('add');
            $('nav ul li [data-id=about]').addClass('add');
        } else if (scrollPosition > service && scrollPosition < works) {
            $('nav ul li .add').removeClass('add');
            $('nav ul li [data-id=service]').addClass('add');
        } else if (scrollPosition > works && scrollPosition < hire) {
            $('nav ul li .add').removeClass('add');
            $('nav ul li [data-id=works]').addClass('add');
        } else if (scrollPosition > hire - 100) {
            $('nav ul li .add').removeClass('add');
            $('nav ul li [data-id=hire]').addClass('add');
        } else {
            $('nav ul li .add').removeClass('add');
            $('nav [data-id=home]').addClass('add');
        }
        if (scrollPosition > about - 300) {
            $('#go').fadeIn();
        } else {
            $('#go').fadeOut();
        }
    });
    $('#go').click(function(e) {
        $('body, html').animate({
            scrollTop: 0
        }, 300);
        $('header').removeClass('nice_nav');
    });
    $(window).scroll(function(e) {
        var newScroll = e.currentTarget.scrollY;
        /*console.log(e.currentTarget.scrollY);*/
    });
    $("#hire").click(function() {
        console.log("worked");
        $('html, body').animate({
            scrollTop: 3400
        }, 1000);
    });
    $('.into').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '#area'
    });
    $('#area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.into',
        focusOnSelect: true
    });
    $('mg').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
    })
    $('.tarif').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.into button').click(function() {
        $(this).addClass('active');
        console.log('actived')
    });
    $('form').submit(function(e) {
        e.preventDefault();
        /* var template_params = {
             "reply_to": "reply_to_value",
             "from_name": "from_name_value",
             "to_name": "to_name_value",
             "message_html": "message_html_value"
         }
         var service_id = "default_service";
         var template_id = "template_ay558oYU";
         emailjs.send(service_id, template_id, template_params);
         console.log(222);

         var myform = $("form#formb");
         myform.submit(function(event) {
             event.preventDefault();
             // Change to your service ID, or keep using the default service
             var service_id = "default_service";
             var template_id = "template_ay558oYU";
             myform.find("button").text("Sending...");
             emailjs.sendForm(service_id, template_id, myform[0])
             .then(function() {
                 alert("Sent!");
                 myform.find("button").text("Send");
             }, function(err) {
                 alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                 myform.find("button").text("Send");
             });
             return false;
         });*/
    });
    $('#icn').click(function() {
        $('.inmenu').slideToggle().toggleClass('open');
    });
    $('.inmenu').mouseleave(function() {
        $(this).css('display', 'none')
    });
});