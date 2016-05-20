(function($){
    $.buonzz_hits = function(options) {
       var settings = $.extend({
            api_url: "https://hits.buonzz.com/1x1.gif",
            event_name: "pageview",
            event_data: {"url": document.location.href}     
        }, options );

       $.get( settings.api_url, { eventType: settings.event_name , element: "page", 
                       data: settings.event_data
                      });

    }
})(jQuery);