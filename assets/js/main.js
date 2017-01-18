$(document).ready(function () {
    // BROWSER DETECTION
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        // Mac
        if ($.browser.opera) { $('html').addClass('opera'); }
        if ($.browser.webkit) { $('html').addClass('webkit'); }
        if ($.browser.mozilla) { $('html').addClass('mozilla'); }
        if (/camino/.test(navigator.userAgent.toLowerCase())) { $('html').addClass('camino'); }
        if (/chrome/.test(navigator.userAgent.toLowerCase())) { $('html').addClass('chrome'); }
        if (navigator && navigator.platform && navigator.platform.match(/^(iPad|iPod|iPhone)$/)) { $('html').addClass('apple'); }
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { $('html').addClass('safari'); }
    }
    else {
        // Not Mac
        if ($.browser.opera) { $('html').addClass('opera-pc'); }
        if ($.browser.webkit) { $('html').addClass('webkit-pc'); }
        if ($.browser.mozilla) { $('html').addClass('mozilla-pc'); }
        if (document.all && document.addEventListener) { $('html').addClass('ie9'); }
        if (/chrome/.test(navigator.userAgent.toLowerCase())) { $('html').addClass('chrome-pc'); }
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { $('html').addClass('safari-pc'); }
    }
    // END BROWSER DETECTION
    $('[data-toggle="tooltip"]').tooltip();
    $(".closeIcon").click(function () {
        $(".sidebarDetails").slideUp();
        $(".sidebarListing").slideDown();
    });
    $(".scrollSidebar").mCustomScrollbar({
        scrollInertia: 100,
        autoHideScrollbar: true,
        advanced: {
            updateOnContentResize: true
        }        
    });
    var windowHeight = $(window).height();
    var headerHeight = $(".mainNav").height();
    $("#map, .scrollSidebar").height(windowHeight - headerHeight);
    $(window).resize(function () {
        var windowHeight = $(window).height();
        var headerHeight = $(".mainNav").height();
        $("#map, .scrollSidebar").height(windowHeight - headerHeight);
    });
    $(window).trigger('resize');
});