$(window).scroll(animateNumbers);
var viewed = false;

var width = window.innerWidth;

var documentHasScroll = function () {
    return window.innerHeight <= document.body.offsetHeight;
};

window.addEventListener('scroll', function (e) {
    var headernavbar = document.getElementById("headernavbar");
    var scrollable = headernavbar.offsetHeight;

    if (window.scrollY > scrollable) {
        var headerNavbarNav = document.querySelector('#headerNavbarNav')
        headernavbar.classList.add('scrolled');
    } else {
        headernavbar.classList.remove('scrolled');
    }
});



$(document).ready(function () {
    // $("nav").removeClass("no-transition");
    /* MENU */
    $('.navbar-nav').attr('id', 'menu'); // please don't remove this line
    $('<div class="calendar-top"></div>').insertBefore("#calendar");
    $('<div class="card-profile-top"></div>').insertBefore(".card.profile.card-profile");
    var divs = $(".card-profiles > div");
    for (var i = 0; i < divs.length; i += 2) {
        divs.slice(i, i + 2).wrapAll('<div class="col-xs" />');
    }



    document.querySelector('.header-image video').playbackRate = 0.7;

    var headerNavbar = $('#headerNavbar');
    var width100 = $('.width100');
    var innerWidth = $('body').innerWidth();
    headerNavbar.width(innerWidth);
    width100.width(innerWidth);

    $('.nav-item').children("a").each(function () {
        if ($(this).attr('data-toggle') == 'dropdown') {
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

    if (width < 992) { // mobile
        $('#menuToggle input[type="checkbox"]').change(function () {
            var checked = $(this).is(":checked");
            if (checked) {
                $('#menu').show("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('#menu, #menu *').css({
                    'visibility': 'visible'
                });
                $('body', 'html').css({
                    'overflow': 'hidden'
                });
            } else {
                $('#menu').hide("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('body', 'html').css({
                    'overflow': 'auto'
                });
            }
        });
    }


    $('body').on('click', '.work_packages .accordion-toggle, .messages .accordion-toggle', function () {
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            $(this).children().find(".plusminus").text('+');
            $(this).children(".green_bullet").removeClass('expaned');
            $(this).children(".plusminus").html('<span class="plus"></span>');
        } else {
            $(this).next(".accordion-content").slideDown(300);
            $(this).children().find(".plusminus").text('-');
            $(this).children(".green_bullet").addClass('expaned');

            $(this).children(".plusminus").html('<span class="minus"></span>');
        }
    });

    $('.work_packages .accordion-content, .pilots .accordion-content, .messages .accordion-toggle').each(function (index, value) {
        $(value).find('a').attr("onclick", "window.open(this.href, '_blank');")
    });

    if (width >= 1024) {
        $('.work_packages .key_0, .work_packages .key_2, .work_packages .key_4, .work_packages .key_6, .work_packages .key_8, .work_packages .key_10, .work_packages .key_12').wrapAll('<div class="col-md-6 col-xs-12" />');
        $('.work_packages .key_1, .work_packages .key_3, .work_packages .key_5, .work_packages .key_7, .work_packages .key_9, .work_packages .key_11').wrapAll('<div class="col-md-6 col-xs-12" />');
    }

    $('.pilots .accordion-border').click(function () {
        var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
        var toggler = $(this).find(".accordion-toggle");

        if (toggler.next(".accordion-content").is(':visible')) {
            $("path[title='" + title + "']").removeClass('active_path');
        } else {
            $("path[title='" + title + "']").addClass('active_path');
        }
    });

    $('.nav-item').children("a").each(function () {
        if ($(this).attr('data-toggle') == 'dropdown') {
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

    if (window.location.hash) {
        var link = window.location.hash;
        var anchorId = link.substr(link.indexOf("#") + 1);
        if ($("#" + anchorId).offset()) {
            $('html, body').animate({
                scrollTop: $("#" + anchorId).offset().top - 150
            }, 500);
        } else {
            $('.accordion-border').each(function () {
                var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                var toggler = $(this).find(".accordion-toggle");
                if (title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible')) {
                    $('html, body').animate({
                        scrollTop: toggler.parent().offset().top - 150
                    }, 500);
                    toggler.trigger("click");
                }
            });
        }
    }

    $('.dropdown a').click(function (event) {

        if (location.href.indexOf("#") != -1) {
            var link = $(this).attr('href');
            var anchorId = link.substr(link.indexOf("#") + 1);
            if ($("#" + anchorId).length > 0) {
                $('html, body').animate({
                    scrollTop: $("#" + anchorId).offset().top - 150
                }, 500);
            } else {
                // event.preventDefault();
                $("path[title='" + anchorId.toUpperCase() + "']").addClass('active_path');

                $('.accordion-border').each(function () {
                    var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                    var toggler = $(this).find(".accordion-toggle");
                    if (title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible')) {
                        $('html, body').animate({
                            scrollTop: toggler.parent().offset().top - 150
                        }, 500);
                        toggler.trigger("click");
                        event.preventDefault();
                    }
                });
            }
        }
    });


    $('.work_packages .accordion-content, .messages .accordion-toggle').each(function (index, value) {
        $(value).find('a').attr("onclick", "window.open(this.href, '_blank');")
    });

    $('.about_timeline .container').children().unwrap();
    onHashChange();
    $(window).on("hashchange", function () {
        onHashChange();
    });

    $('.nav.nav-pills').removeAttr('id');

    var count = $("h1").text().length;



    $('.news-image-hover').click(function () {
        var url = $(this).find('a.more').attr('href');
        window.location.href = url;
    });

    $('.event-start').click(function () {
        var url = $('.event-more').find('.read-more').attr('href');
        window.location.href = url;
    });

    $('.event-title').click(function () {
        var url = $('.event-more').find('.read-more').attr('href');
        window.location.href = url;
    });

    $('.search-btn').click(function () {
        showSearchForm();
    });

    if ($('.about_timeline').length && width >= 1024) {
        $('.about_timeline').append('<span class="timeline-after"></span>');

        $(window).on('scroll', function () {
            var windowTop = $(window).scrollTop();
            var windowHeight = $(window).height();

            $('.timeline-block').each(function () {
                var blockTop = $(this).offset().top;
                var $marker = $(this).find('.marker');
                var $timelineAfter = $('.about_timeline .timeline-after');

                // Calculate the new height based on scroll position
                var timelineTop = $('.about_timeline').offset().top;
                var timelineHeight = $('.about_timeline').height();
                var scrollPosition = windowTop + windowHeight - timelineTop - 61; // Adjust the top offset

                if (windowTop + windowHeight > blockTop + 100) {
                    $marker.css('background', '#C4DAA9'); // Change to desired color

                    // Ensure the new height does not exceed the timeline height
                    var newHeight = Math.min(scrollPosition, timelineHeight);
                    newHeight = Math.max(newHeight, 0); // Ensure it doesn't go below 0

                    $timelineAfter.css('height', newHeight + 'px');
                    $timelineAfter.css('background', '#C4DAA9');
                } else {
                    $marker.css('background', '#ccc'); // Default color
                }
            });

            // Handle case when scrolling back up
            var firstBlockTop = $('.timeline-block').first().offset().top;
            if (windowTop + windowHeight < firstBlockTop + 100) {
                $('.about_timeline .timeline-after').css('height', '0');
            }
        });
    }


    if (width >= 1024) {
        $('.outpits_list_item_container').attr({
            'data-aos': 'zoom-in',
            'data-aos-easing': 'ease-in-out',
            'data-aos-duration': '700',
            'data-aos-delay': '300',
        });

        $('.home-event .event-card').attr({
            'data-aos': 'zoom-in',
            'data-aos-easing': 'ease-in-out',
            'data-aos-duration': '700',
            'data-aos-delay': '240',
            'data-aos-offset': '-800'
        });

        $('.timeline-content').attr({
            'data-aos': 'fade-up',
        });

        $('.latest-news-container .latest-news').attr({
            'data-aos': 'fade-right',
            'data-aos-easing': 'ease-in-sine',
            'data-aos-duration': '700',
            'data-aos-delay': '0',
            'data-aos-offset': '-800'
        });

        $('.latest-news-container .highlight-news').attr({
            'data-aos': 'fade-left',
            'data-aos-easing': 'ease-in-sine',
            'data-aos-duration': '700',
            'data-aos-delay': '0',
            'data-aos-offset': '-800'
        });

        $('.entries-container .nav-row, .entries-container .bubble-title').attr({
            'data-aos': 'fade-up',
            'data-aos-easing': 'ease-in-sine',
            'data-aos-duration': '700',
            'data-aos-delay': '0',
            'data-aos-offset': '-800'
        });
    } else {
        $('.outpits_list_item_container, .home-event .event-card, .timeline-content, .latest-news-container .latest-news, .latest-news-container .highlight-news, .entries-container .nav-row, .entries-container .bubble-title').attr('data-aos', 'fade-up');
    }
    // $('.timeline-content').attr('data-aos', 'fade-up');
    $('.library-item').attr('data-aos', 'fade-up');
    $('.about_timeline_container').attr('data-aos', 'fade-up');
    $('.entry_item ').attr('data-aos', 'fade-up');

    $('.see_all_partners_link').hide();

    $(".timeline_container.left .blue_line").width(function () {
        return (innerWidth - $('.container').width()) / 2;
    });


    $('.dorsal').click(function () {
        var link = $(this);
        link.parent().parent().find('.toogle-contact-paragraphs').slideToggle('slow', function () {
            if ($(this).is(':visible')) {
                link.text('Read less');
            } else {
                link.text('Read more');
            }
        });

    });

    $('.library .form-wrapper, .library-items').wrapAll('<div class="container-fluid bg-secondary"><div class="container"></div></div>');
    $('.library .tabs').wrapAll('<div class="container"></div>');
    $('.library_content .row.center-xs.mb-1').wrapAll('<div class="container_relative"></div>');

    if (width > 1024) {
        $('.partners_list .key_0, .partners_list .key_2, .partners_list .key_4, .partners_list .key_6, .partners_list .key_8, .partners_list .key_10, .partners_list .key_12, .partners_list .key_14, .partners_list .key_16, .partners_list .key_18').wrapAll('<div class="col-md-6 col-xs-12"></div>');
        $('.partners_list .key_1, .partners_list .key_3, .partners_list .key_5, .partners_list .key_7, .partners_list .key_9, .partners_list .key_11, .partners_list .key_13, .partners_list .key_15, .partners_list .key_17, .partners_list .key_19').wrapAll('<div class="col-md-6 col-xs-12"></div>');
    }


    $(window).on("load", function () {
        $(".projects_services .accordion-border").each(function (k, v) {
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active");
            $(this).removeClass("ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active");
            $(this).removeAttr('style');
        });

        $('.projects_services .col-md-6').each(function (k, v) {
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active");
        });
        $('.projects_services .col-md-6').hover(function () {
            $(this).removeClass('ui-state-hover');
        });
        $('.projects_services .col-md-6').click(function () {
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active ui-state-focus");
        });

        $('.projects_services .accordion-border').click(function () {
            $(this).removeClass("ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active ui-state-focus");
            $(this).removeClass("ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active");
            $(this).removeAttr('style');
        });
    });

    $(document).ready(function () {
        $('.video-carousel').slick({
            arrows: false,
            prevArrow: $('.video-prev'),
            nextArrow: $('.video-next'),
            autoplay: true,         // Enable autoplay
            autoplaySpeed: 6500,    // Set the speed of autoplay in milliseconds
            draggable: false,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,             // Enable fade effect for smooth transition
            cssEase: 'linear'       // Set the easing for the fade effect
        });

        $('.entries-carousel').slick({
            slidesToShow: 2.2,
            slidesToScroll: 1,
            autoplay: false,
            centerMode: true,
            centerPadding: '10%',
            infinite: true,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    
    $(".partner_description a.read_full").click(function () {
        var $el, $ps, $up, totalHeight;
        totalHeight = 75;
        $el = $(this); // read-more link
    
        $up = $el.parent(); // partner_description
        if ($el.text() == "Read more") {
            $ps = $up.find(".partner_content p, .partner_content ul, .partner_content ol");
    
            // Measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
            $ps.each(function () {
                totalHeight += $(this).outerHeight();
            });
    
            $up.addClass('changed');
    
            $el.css({
                top: totalHeight - 30
            });
            $up.css({
                // Set height to prevent instant jumpdown when max height is removed
                "height": $up.height() + 65,
                "max-height": 9999,
            });
    
            // Apply the height change after setting the initial height
            setTimeout(function() {
                $up.css("height", totalHeight);
            }, 10); // Small timeout to ensure transition
    
            // Show the link after the transition ends
            $up.one('transitionend', function() {
                $(this).find('.partner_link').show();
            });
    
            // Stuff to do when btn is in the read more state
            $el.html("Read less");
        } else {
            $(this).parent().find('.partner_link').hide();
            $up.removeClass('changed');
            $el.css({
                top: 110
            });
            $up.css({
                // Set height to prevent instant jumpdown when max height is removed
                "height": $up.height(),
                "max-height": 460,
            });
    
            // Apply the height change after setting the initial height
            setTimeout(function() {
                $up.css("height", totalHeight + 65);
            }, 10); // Small timeout to ensure transition
    
            // Stuff to do when btn is in the read less state
            $el.html("Read more");
    
            $('html, body').animate({
                scrollTop: $up.offset().top - $('header').height()
            });
        }
        return false;
    });
    

    $('.events_tabs').each(function () {
        // For each set of tabs, we want to keep track of
        // which tab is active and its associated content
        var $active, $content, $links = $(this).find('a');
        var speed = "fast";
        var activeTab = $(location.hash);
        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter("[href=\'" + location.hash + "\']")[0] || $links[0]);

        if ($(this).parent().parent().hasClass('videos')) {
            $active.addClass('active');
        }

        if ($(this).parent().parent().hasClass('events')) {
            $active.addClass('active');
        }

        $content = $($active[0].hash);

        // Hide the remaining content
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        if (activeTab.length) {
            $content.slideDown(speed);
            //scroll to element
            $('html, body').animate({
                scrollTop: activeTab.offset().top - $('header').height()
            }, speed);
        }

        // Bind the click event handler
        $(this).find("a").click(function (e) {
            if ($(this).hasClass('active')) {
                $content.slideDown({
                    scrollTop: $content.offset().top - $('header').height()
                }, speed);
                var screenSize = getScreenSize();
                if (screenSize.width < 800) {
                    // scroll to element
                    $('html, body').animate({
                        scrollTop: $content.offset().top - $('header').height() + 300  // mobile
                    }, speed);
                } else {
                    //scroll to element icons top
                    $('html, body').animate({
                        scrollTop: $content.offset().top - $('header').height() + 300
                    }, speed);
                }
                e.preventDefault();
                return false;
            }
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            location.hash = $active[0].hash;

            // Make the tab active.
            $active.addClass('active');
            $content.slideDown({
                scrollTop: $content.offset().top - $('header').height()
            }, speed);

            // Prevent the anchor\'s default click action
            e.preventDefault();
        });
    });


    /* buttons */


    // $(".button_su_inner").mouseenter(function (e) {
    //     var parentOffset = $(this).offset();
    //     var relX = e.pageX - parentOffset.left;
    //     var relY = e.pageY - parentOffset.top;
    //     $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
    //     $(this).prev(".su_button_circle").removeClass("desplode-circle");
    //     $(this).prev(".su_button_circle").addClass("explode-circle");
    // });

    // $(".button_su_inner").mouseleave(function (e) {
    //     var parentOffset = $(this).offset();
    //     var relX = e.pageX - parentOffset.left;
    //     var relY = e.pageY - parentOffset.top;
    //     $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
    //     $(this).prev(".su_button_circle").removeClass("explode-circle");
    //     $(this).prev(".su_button_circle").addClass("desplode-circle");
    // });




    $('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
        '<a class="folder-background" style="display:flex; background: url(https://pollinators-antenna.eu/storage/app/media/report-forms.svg) center center no-repeat; background-size: 100px; height: 200px" href="/internal-repository/dissemination-report-forms" title="Dissemination report forms"></a>\n' +
        '<h3 class="card-header"><a href="/internal-repository/dissemination-report-forms" title="Reporting forms">Reporting forms</a></h3>\n' +
        '</div>').insertAfter($('.card.internal').last());

    $('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
        '<a class="folder-background" style="display:flex; background: url(https://pollinators-antenna.eu/storage/app/media/living-documents.svg) center center no-repeat; background-size: 100px; height: 200px" href="/internal-repository/living-documents" title="Living documents"></a>\n' +
        '<h3 class="card-header"><a href="/internal-repository/living-documents" title="Living documents">Living documents</a></h3>\n' +
        '</div>').insertAfter($('.card.internal').last());

    $('<small>To download individual image please right click</small>').insertAfter($('.all_images_container'));

    $('<div class="mark"></div>').insertAfter($('.group-holder input'));

    $('.mailing .btn.btn-primary').addClass('btn-slide-plain');
    $('.mailing .btn.btn-primary').addClass('dwn-btn');

});



function expandReadMore(el) {
    var $el, $ps, $up, totalHeight;

    totalHeight = 115;

    $el = $(el) // read-more link

    $up = $el.parent(); // coordinator_info

    if ($el.text() == "Read more") {

        $ps = $up.find("p");

        // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
        $ps.each(function () {
            totalHeight += $(this).outerHeight();
        });

        $up.addClass('changed');

        $el.css({
            top: totalHeight - 120
        });
        // $el.html('<a class="revert" href="" onclick="revertChanges(this);">Read less</a>');

        $up.css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 9999,
        })
            .animate({
                "height": totalHeight
            });

        //Stuff to do when btn is in the read more state
        $el.html("Read less");
        // $up.slideDown();
    } else {

        $up.removeClass('changed');

        $el.css({
            top: 53
        });
        // $el.html('<a class="revert" href="" onclick="revertChanges(this);">Read less</a>');

        $up.css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 460,
        })
            .animate({
                "height": totalHeight
            });
        //Stuff to do when btn is in the read less state
        $el.html("Read more");

        $('html, body').animate({
            scrollTop: $up.offset().top - $('header').height() - 300
        });
    }
    return false;
}

function onHashChange() {
    $("path").removeClass('active_path');
    $(".accordion-content").hide();
    var caseStudiesHashTitle = location.hash;

    if (caseStudiesHashTitle) {
        var caseStudiesTitle = caseStudiesHashTitle.substring(1, caseStudiesHashTitle.length);
        $("path[title='" + caseStudiesTitle.toUpperCase() + "']").addClass('active_path');


    }
}

function encodeURIObject(data) {
    return Object.keys(data).map(function (i) {
        return encodeURIComponent(i) + '=' + encodeURIComponent(data[i])
    }).join('&');
}

// function appendProfile() {
//     $(document).on('profile', function (e) {
//         var headerNavbarNav = $('.search-and-social-media');
//         var li = '<li class="nav-item sign-in"><a href="/profile" target = "_self">Profile</a></li >';
//         headerNavbarNav.find('>ul').append(li);
//     });
// }

function appendSignIn() {
    $(document).on('signin', function (e) {
        var headerNavbarLogin = $('.search-and-social-media');
        var li = '<li class="nav-item sign-in"><a href="/login" target = "_self">Login</a></li >';
        headerNavbarLogin.find('>ul').append(li);
        var menu = $('#menuToggle');
        menu.find('>ul').append(li);
    });
}

function appendSignOut() {
    $(document).on('signout', function (e) {
        var headerNavbarNav = $('.search-and-social-media');
        var li = '<li class="nav-item  sign-in"><a data-request="onLogout" data-request-data="redirect: \'/\'"> Log out</a></li >';
        headerNavbarNav.find('>ul').append(li);
        var menu = $('#menuToggle');
        menu.find('>ul').append(li);
    });
}

function appendSearchAndSocialMedia() {
    var liSearch = '<li class="nav-item search_field"><a href=\"javascript: void(0);\" onclick=\"showSearchForm();\"></a></li>';
    var liSocial = '<li class="nav-item social">' +
        '<a href=\"https://twitter.com/antenna_eu\" target=\"_blank\" class=\"pr p-twitter big\" target=\"_blank\"></a>' +
        '<a href=\"https://www.linkedin.com/company/antenna-project/\" target=\"_blank\" class=\"pr p-linkedin big\" target=\"_blank\"></a>' +
        '<a href=\"https://www.youtube.com/@antenna_eu\" target=\"_blank\" class=\"pr p-youtube big\" target=\"_blank\"></a>';
    var liLogIn = '<li class="nav-item sign-in"><a href="/login" target = "_self">Login</a></li >';

    var menu = $('#menuToggle');
    menu.find('>ul').append(liSearch).append(liSocial).appennd(liLogIn);
}

function redirectAndRefresh(url) {
    $(".tabs a").each(function () {
        this.href = window.location.hash;
    });
    window.open(url, '_blank');
    location.reload();
}

function isBreakpointLarge() {
    return window.innerWidth <= 991;
}

function showSearchForm() {
    $('#layout-header').toggleClass('full-width');
    $('#search').toggle();
    $('.navbar a.p-search').css('visibility', 'hidden');
    $('')
    $('#menu li').hide();
}

function hideSearchForm() {
    $('#layout-header').toggleClass('full-width');
    $('#search').hide();
    $('.navbar a.p-search').css('visibility', 'visible');
    $('#menu li').show();
}

function requestFormLibrary() {
    $('#mylibraryForm').on('click', 'a', function () {
        var $form = $(this).closest('form');
        $form.request();
    })
}

function requestFormPartners() {
    $('#myPartnersForm').on('click', 'a', function () {
        var $form = $(this).closest('form');
        $form.request();
    })
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    if ($(elem).height()) {
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    return;

}




function scrollDown() {
    var element = $('#layout-content');
    $("html, body").animate({ scrollTop: element.offset().top - 190 }, 500);
}



function hideMe(elem) {
    $(elem).parent().hide();
}

function fetchMails(i, searchStr) {
    // $('.group_mailing_list').hide();
    if ($('.group_mailing_list_' + i).is(":visible")) {
        $('.group_mailing_list_' + i).hide();
    } else {
        //groups
        $.request('onFetchMailingList', {
            update: {
                'mailing_list': '#mailing_list_tooltip_content_' + i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.group_mailing_list_' + i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.mailing_list);
        });
        $('.group_mailing_list').hide();
        $('.group_mailing_list_' + i).show();
    }

}


function fetchSingleMail(i, searchStr) {
    if ($('.single_mailing_list_' + i).is(":visible")) {
        $('.single_mailing_list_' + i).hide();
    } else {
        //groups
        $.request('onFetchSingleMail', {
            update: {
                'individual_email': '#individual_tooltip_content_' + i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.single_mailing_list_' + i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.individual_email);
        });
        $('.single_mailing_list').hide();
        $('.single_mailing_list_' + i).show();
    }
}

function initMailingTooltip() {
    var searchStr = '';
    $('.group-holder').eq(0).find('.inputWithTooltip span').each(function (i, obj) {
        searchStr = $.trim($(obj).text());
        $(this).parent().css('display', 'inline-grid');
        $('<img src="/storage/app/media/CMS_icons_groups.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_' + i + '" onclick="fetchMails(' + i + ', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $('<div class="group_mailing_list group_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());


    });
    $('.group-holder').eq(1).find('.inputWithTooltip span').each(function (i, obj) {
        searchStr = $.trim($(obj).text());
        $('<img src="/storage/app/media/CMS_icons_individuals.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_individuals_' + i + '" onclick="fetchSingleMail(' + i + ', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $(this).parent().css('display', 'inline-grid');
        $('<div class="single_mailing_list single_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());
    });

    $('.group-holder').eq(0).prepend("<p style='margin-left: 10px; width: 100%;'>Prior to sending group emails, please make sure that all individuals you want to contact have been included in the respective group by clicking on the group icon.</p><p></p>");
    $('.group-holder').eq(1).prepend("<p style='margin-left: 10px; width: 100%;'>To see each person’s email, click on the account icon.</p><p></p>");

}


function getScreenSize() {
    var myHeight = 0;
    var myWidth = 0;
    if (window.innerWidth && window.innerHeight) {
        // Netscape & Mozilla
        myHeight = window.innerHeight;
        myWidth = window.innerWidth;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        // IE > 6
        myHeight = document.documentElement.clientHeight;
        myWidth = document.documentElement.clientWidth;
    } else if (document.body.offsetWidth && document.body.offsetHeight) {
        // IE = 6
        myHeight = document.body.offsetHeight;
        myWidth = document.body.offsetWidth;
    } else if (document.body.clientWidth && document.body.clientHeight) {
        // IE < 6
        myHeight = document.body.clientHeight;
        myWidth = document.body.clientWidth;
    }

    return { 'width': myWidth, 'height': myHeight };
}

function init() {
    window.addEventListener('resize', function () {
        if (isBreakpointLarge()) {
            $('#card-carousel').slick('unslick');
        } else {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev"/>',
                    nextArrow: '<i class="slick-next"/>',
                });
            }
        }
        // keepFooter(documentHasScroll());

    });
    document.addEventListener('DOMContentLoaded', function () {
        if (!isBreakpointLarge()) {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev"/>',
                    nextArrow: '<i class="slick-next"/>',
                });
            }
        }
        appendSearchAndSocialMedia()
        requestFormLibrary()
        // requestFormPartners()
        // keepFooter(documentHasScroll());

    });
    // appendProfile()
    appendSignIn()
    appendSignOut()
}

function scrollToField(errors) {
    $(".get_involved_form input, .get_involved_form select, .get_involved_form .row").removeClass('red_err_field');
    $.each(errors.scroll_to_field, function (key, valueObj) {
        $("#" + key).addClass('red_err_field');
        $('html, body').animate({
            scrollTop: $("#" + key).offset().top - 200
        }, 1000);
        return false; // breaks
    });
}

function handlePilotsSVGMapMouseMove(event) {
    var title = $(event.target).parent().attr('title');
    var tooltip = document.getElementById("tooltip");

    switch (title) {
        case 'San Miguel Island':
        case 'Xistral Mountains of Galicia':
        case 'Ebro':
        case 'Eifel - High Fens':
        case 'Weiße Elster catchment':
        case 'Pärnu catchment':
        case 'Alam-Pedja':
            break;
        default:
            return tooltip.classList.remove("active");
    }
    var x = event.clientX;
    var y = event.clientY;

    tooltip.style.left = (x + 20) + "px";
    tooltip.style.top = (y + 250) + "px";

    tooltip.innerHTML = title;
    tooltip.classList.add("active");

}

function onPilots(pTitle) {
    var tooltip = document.getElementById("tooltip");
    // tooltip.classList.remove("active");
    if (!$("path[title='" + pTitle + "']").hasClass('active_path')) {
        $("path[title='" + pTitle + "']").addClass('active_path');

        $('.accordion-border').each(function () {
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if (title.indexOf(pTitle) >= 0 && !toggler.next(".accordion-content").is(':visible')) {
                toggler.trigger("click");
                $('html, body').animate({
                    scrollTop: toggler.parent().offset().top - 150
                }, 500);
            }
        });
    } else {
        $("path[title='" + pTitle + "']").removeClass('active_path');
        $('.accordion-border').each(function () {
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if (title.indexOf(pTitle) >= 0 && toggler.next(".accordion-content").is(':visible')) {
                toggler.trigger("click");
            }
        });
    }
}

function initButtonStyle() {
    // Insert circle span before the primary button
    $("<span class=\"su_button_circle desplode-circle\"></span>").insertBefore(".btn.btn-primary");

    // Wrap button inner content and adjust classes
    $('.btn.btn-primary').wrapInner('<span class="button_text_container">');
    $('.btn.btn-primary').addClass('button_su_inner').removeClass('btn-primary');

    // Remove text nodes inside the button_text_container
    $('.button_text_container').contents().filter(function () { return this.nodeType == 3; }).remove();

    // Wrap specific elements inside a button_su div
    $('.col-xs-12.col-md-3.end-xs.end-md').wrapInner('<div class="button_su">');
    // $('.library form:has(.button_su_inner)').wrap('<div class="button_su">');

    var submitButton = $('.container .row.center-xs.mb-1 .btn.button_su_inner');
    var sortWrapper = $('<div class="sort-search-wrapper"></div>');
    var searchWrapper = $('<div class="search-wrapper"></div>');

    submitButton.addClass('btn btn-slide-plain')
    $('.sort-form').add('.searchLibrary').wrapAll(sortWrapper);
    $('.form-wrapper').append(submitButton);

    if ($(window).width() >= 1024) {
        $('.library-item .button_su_inner').hover(
            function () {
                $(this).removeClass('no-margin button_su_inner').addClass('dwn-btn-library');
                $(this).children().append('<span class="download-text"> Download</span>');
                $(this).find('button_text_container').css('margin-left', '10px');
            },
            function () {
                $(this).removeClass('btn-slide btn-download').addClass('no-margin button_su_inner');
                $(this).find('.download-text').remove();
                $(this).find('button_text_container').css('margin-left', '');
            }
        );
    }
}

function animateNumbers() {
    if (isScrolledIntoView($(".numbers")) && !viewed) {
        viewed = true;
        $('.count').each(function () {
            var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1800,
                easing: 'swing',
                step: function (now) {
                    $(this).text(parseFloat(now).toFixed(size));
                }
            });
        });
    }
}

init()
