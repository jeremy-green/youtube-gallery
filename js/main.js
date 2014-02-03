/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.youtube_gallery= {
  attach: function(context, settings) {

    $(document).ready(function() {
      if (!Modernizr.mq('only all and (max-width: 480px)')) {
        Shadowbox.init();
      } else {
        $('.yt-gallery-column').find('a').attr('href', function() {
          return $(this).attr('data-mobile-href');
        });
      }
    });
  }
};


})(jQuery, Drupal, this, this.document);
