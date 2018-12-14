/* page.js v1.0.0 modified by xrd Sept.08 2016 */
(function(e){function u(s,o){var u,a,f;if((u=e(s))[t]==0)return n;a=u[i]()[r];switch(o.anchor){case"middle":f=a-(e(window).height()-u.outerHeight())/2;break;default:case r:f=Math.max(a,0)}return typeof o[i]=="function"?f-=o[i]():f-=o[i],f}var t="length",n=null,r="top",i="offset",s="click.scrolly",o=e(window);e.fn.scrolly=function(i){var o,a,f,l,c=e(this);if(this[t]==0)return c;if(this[t]>1){for(o=0;o<this[t];o++)e(this[o]).scrolly(i);return c}l=n,f=c.attr("href");if(f.charAt(0)!="#"||f[t]<2)return c;a=jQuery.extend({anchor:r,easing:"swing",offset:0,parent:e("body,html"),pollOnce:!1,speed:1e3},i),a.pollOnce&&(l=u(f,a)),c.off(s).on(s,function(e){var t=l!==n?l:u(f,a);t!==n&&(e.preventDefault(),a.parent.stop().animate({scrollTop:t},a.speed,a.easing))})}})(jQuery);
jQuery.scrollzer=function(e,t){ var r=jQuery(window),a=jQuery(document); r.load(function(){ var i,o,s,l,n,c,u=jQuery.extend({activeClassName:"active",suffix:"-link",pad:50,firstHack:!1,lastHack:!1},t),d=[],f=jQuery(); for(i in e)s=jQuery("#"+e[i]),l=jQuery("#"+e[i]+u.suffix),s.length<1||l.length<1||(o={},o.link=l,o.object=s,d[e[i]]=o,f=f.add(l)); var v,h=function(){ var e; for(i in d)e=d[i],e.start=Math.ceil(e.object.offset().top)-u.pad,e.end=e.start+Math.ceil(e.object.innerHeight()); r.trigger("scroll") }; r.resize(function(){window.clearTimeout(v),v=window.setTimeout(h,250)}); var j,m=function(){ f.removeClass("scrollzer-locked")}; r.scroll(function(e){ var t=0,o=!1; n=r.scrollTop(),window.clearTimeout(j),j=window.setTimeout(m,250); for(i in d)i!=c&&n>=d[i].start&&n<=d[i].end&&(c=i,o=!0),t++; u.lastHack && n+r.height()>=a.height() && (c=i,o=!0),o && !f.hasClass("scrollzer-locked") && (f.removeClass(u.activeClassName),f.addClass(u.activeClassName)) }), r.trigger("resize") }) };

(function($) {

  skel.breakpoints({
    wide: '(min-width: 961px) and (max-width: 1880px)',
    normal: '(min-width: 961px) and (max-width: 1620px)',
    narrow: '(min-width: 961px) and (max-width: 1320px)',
    narrower: '(max-width: 960px)',
    mobile: '(max-width: 736px)'
  });

  $(function() {

    var	$window = $(window),
    $body = $('body');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      $body.removeClass('is-loading');
    });

    // CSS polyfills (IE<9).
    if (skel.vars.IEVersion < 9)
      $(':last-child').addClass('last-child');

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on mobile.
    skel.on('+mobile -mobile', function() {
      $.prioritize(
          '.important\\28 mobile\\29',
          skel.breakpoint('mobile').active
          );
    });

    // Scrolly links.
    $('.scrolly').scrolly();

    // Nav.
    var $nav_a = $('#nav a');

    // Scrolly-fy links.
    $nav_a
      .scrolly()
      .on('click', function(e) {

        var t = $(this),
        href = t.attr('href');

        if (href[0] != '#')
          return;

        e.preventDefault();

        // Clear active and lock scrollzer until scrolling has stopped
        $nav_a
          .removeClass('active')
          .addClass('scrollzer-locked');

        // Set this link to active
        t.addClass('active');

      });

    // Initialize scrollzer.
    var ids = [];

    $nav_a.each(function() {

      var href = $(this).attr('href');

      if (href[0] != '#')
        return;

      ids.push(href.substring(1));

    });

    $.scrollzer(ids, { pad: 200, lastHack: true });

    // Header (narrower + mobile).

    // Toggle.
    $(
        '<div id="headerToggle">' +
        '<a href="#header" class="toggle"></a>' +
        '</div>'
     )
      .appendTo($body);

    // Header.
    $('#header')
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'left',
        target: $body,
        visibleClass: 'header-visible'
      });

    // Fix: Remove transitions on WP<10 (poor/buggy performance).
    if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
      $('#headerToggle, #header, #main')
        .css('transition', 'none');

  });

})(jQuery);

(function($) {

  /**
   * Generate an indented list of links from a nav. Meant for use with panel().
   * @return {jQuery} jQuery object.
   */
  $.fn.navList = function() {

    var	$this = $(this);
    $a = $this.find('a'),
    b = [];

    $a.each(function() {

      var	$this = $(this),
      indent = Math.max(0, $this.parents('li').length - 1),
      href = $this.attr('href'),
      target = $this.attr('target');

      b.push(
          '<a ' +
          'class="link depth-' + indent + '"' +
          ( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
          ( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
          '>' +
          '<span class="indent-' + indent + '"></span>' +
          $this.text() +
          '</a>'
          );

    });

    return b.join('');

  };

  /**
   * Panel-ify an element.
   * @param {object} userConfig User config.
   * @return {jQuery} jQuery object.
   */
  $.fn.panel = function(userConfig) {

    // No elements?
    if (this.length == 0)
      return $this;

    // Multiple elements?
    if (this.length > 1) {

      for (var i=0; i < this.length; i++)
        $(this[i]).panel(userConfig);

      return $this;

    }

    // Vars.
    var	$this = $(this),
    $body = $('body'),
    $window = $(window),
    id = $this.attr('id'),
    config;

    // Config.
    config = $.extend({

      // Delay.
      delay: 0,

      // Hide panel on link click.
      hideOnClick: false,

      // Hide panel on escape keypress.
      hideOnEscape: false,

      // Hide panel on swipe.
      hideOnSwipe: false,

      // Reset scroll position on hide.
      resetScroll: false,

      // Reset forms on hide.
      resetForms: false,

      // Side of viewport the panel will appear.
      side: null,

      // Target element for "class".
      target: $this,

      // Class to toggle.
      visibleClass: 'visible'

    }, userConfig);

    // Expand "target" if it's not a jQuery object already.
    if (typeof config.target != 'jQuery')
      config.target = $(config.target);

    // Panel.

    // Methods.
    $this._hide = function(event) {

      // Already hidden? Bail.
      if (!config.target.hasClass(config.visibleClass))
        return;

      // If an event was provided, cancel it.
      if (event) {

        event.preventDefault();
        event.stopPropagation();

      }

      // Hide.
      config.target.removeClass(config.visibleClass);

      // Post-hide stuff.
      window.setTimeout(function() {

        // Reset scroll position.
        if (config.resetScroll)
          $this.scrollTop(0);

        // Reset forms.
        if (config.resetForms)
          $this.find('form').each(function() {
            this.reset();
          });

      }, config.delay);

    };

    // Vendor fixes.
    $this
      .css('-ms-overflow-style', '-ms-autohiding-scrollbar')
      .css('-webkit-overflow-scrolling', 'touch');

    // Hide on click.
    if (config.hideOnClick) {

      $this.find('a')
        .css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

      $this
        .on('click', 'a', function(event) {

          var $a = $(this),
          href = $a.attr('href'),
          target = $a.attr('target');

          if (!href || href == '#' || href == '' || href == '#' + id)
            return;

          // Cancel original event.
          event.preventDefault();
          event.stopPropagation();

          // Hide panel.
          $this._hide();

          // Redirect to href.
          window.setTimeout(function() {

            if (target == '_blank')
              window.open(href);
            else
              window.location.href = href;

          }, config.delay + 10);

        });

    }

    // Event: Touch stuff.
    $this.on('touchstart', function(event) {

      $this.touchPosX = event.originalEvent.touches[0].pageX;
      $this.touchPosY = event.originalEvent.touches[0].pageY;

    })

    $this.on('touchmove', function(event) {

      if ($this.touchPosX === null
          ||	$this.touchPosY === null)
        return;

      var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
      diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
      th = $this.outerHeight(),
      ts = ($this.get(0).scrollHeight - $this.scrollTop());

      // Hide on swipe?
      if (config.hideOnSwipe) {

        var result = false,
        boundary = 20,
        delta = 50;

        switch (config.side) {

          case 'left':
            result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
            break;

          case 'right':
            result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
            break;

          case 'top':
            result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
            break;

          case 'bottom':
            result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
            break;

          default:
            break;

        }

        if (result) {

          $this.touchPosX = null;
          $this.touchPosY = null;
          $this._hide();

          return false;

        }

      }

      // Prevent vertical scrolling past the top or bottom.
      if (($this.scrollTop() < 0 && diffY < 0)
          || (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

        event.preventDefault();
        event.stopPropagation();

      }

    });

    // Event: Prevent certain events inside the panel from bubbling.
    $this.on('click touchend touchstart touchmove', function(event) {
      event.stopPropagation();
    });

    // Event: Hide panel if a child anchor tag pointing to its ID is clicked.
    $this.on('click', 'a[href="#' + id + '"]', function(event) {

      event.preventDefault();
      event.stopPropagation();

      config.target.removeClass(config.visibleClass);

    });

    // Body.

    // Event: Hide panel on body click/tap.
    $body.on('click touchend', function(event) {
      $this._hide(event);
    });

    // Event: Toggle.
    $body.on('click', 'a[href="#' + id + '"]', function(event) {

      event.preventDefault();
      event.stopPropagation();

      config.target.toggleClass(config.visibleClass);

    });

    // Window.

    // Event: Hide on ESC.
    if (config.hideOnEscape)
      $window.on('keydown', function(event) {

        if (event.keyCode == 27)
          $this._hide(event);

      });

    return $this;

  };

  /**
   * Apply "placeholder" attribute polyfill to one or more forms.
   * @return {jQuery} jQuery object.
   */
  $.fn.placeholder = function() {

    // Browser natively supports placeholders? Bail.
    if (typeof (document.createElement('input')).placeholder != 'undefined')
      return $(this);

    // No elements?
    if (this.length == 0)
      return $this;

    // Multiple elements?
    if (this.length > 1) {

      for (var i=0; i < this.length; i++)
        $(this[i]).placeholder();

      return $this;

    }

    // Vars.
    var $this = $(this);

    // Text, TextArea.
    $this.find('input[type=text],textarea')
      .each(function() {

        var i = $(this);

        if (i.val() == ''
            ||  i.val() == i.attr('placeholder'))
          i
            .addClass('polyfill-placeholder')
            .val(i.attr('placeholder'));

      })
    .on('blur', function() {

      var i = $(this);

      if (i.attr('name').match(/-polyfill-field$/))
        return;

      if (i.val() == '')
        i
          .addClass('polyfill-placeholder')
          .val(i.attr('placeholder'));

    })
    .on('focus', function() {

      var i = $(this);

      if (i.attr('name').match(/-polyfill-field$/))
        return;

      if (i.val() == i.attr('placeholder'))
        i
          .removeClass('polyfill-placeholder')
          .val('');

    });

    // Password.
    $this.find('input[type=password]')
      .each(function() {

        var i = $(this);
        var x = $(
            $('<div>')
            .append(i.clone())
            .remove()
            .html()
            .replace(/type="password"/i, 'type="text"')
            .replace(/type=password/i, 'type=text')
            );

        if (i.attr('id') != '')
          x.attr('id', i.attr('id') + '-polyfill-field');

        if (i.attr('name') != '')
          x.attr('name', i.attr('name') + '-polyfill-field');

        x.addClass('polyfill-placeholder')
          .val(x.attr('placeholder')).insertAfter(i);

        if (i.val() == '')
          i.hide();
        else
          x.hide();

        i
          .on('blur', function(event) {

            event.preventDefault();

            var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

            if (i.val() == '') {

              i.hide();
              x.show();

            }

          });

        x
          .on('focus', function(event) {

            event.preventDefault();

            var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

            x.hide();

            i
              .show()
              .focus();

          })
        .on('keypress', function(event) {

          event.preventDefault();
          x.val('');

        });

      });

    // Events.
    $this
      .on('submit', function() {

        $this.find('input[type=text],input[type=password],textarea')
          .each(function(event) {

            var i = $(this);

            if (i.attr('name').match(/-polyfill-field$/))
              i.attr('name', '');

            if (i.val() == i.attr('placeholder')) {

              i.removeClass('polyfill-placeholder');
              i.val('');

            }

          });

      })
    .on('reset', function(event) {

      event.preventDefault();

      $this.find('select')
        .val($('option:first').val());

      $this.find('input,textarea')
        .each(function() {

          var i = $(this),
          x;

          i.removeClass('polyfill-placeholder');

          switch (this.type) {

            case 'submit':
            case 'reset':
              break;

            case 'password':
              i.val(i.attr('defaultValue'));

              x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

              if (i.val() == '') {
                i.hide();
                x.show();
              }
              else {
                i.show();
                x.hide();
              }

              break;

            case 'checkbox':
            case 'radio':
              i.attr('checked', i.attr('defaultValue'));
              break;

            case 'text':
            case 'textarea':
              i.val(i.attr('defaultValue'));

              if (i.val() == '') {
                i.addClass('polyfill-placeholder');
                i.val(i.attr('placeholder'));
              }

              break;

            default:
              i.val(i.attr('defaultValue'));
              break;

          }
        });

    });

    return $this;

  };

  /**
   * Moves elements to/from the first positions of their respective parents.
   * @param {jQuery} $elements Elements (or selector) to move.
   * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
   */
  $.prioritize = function($elements, condition) {

    var key = '__prioritize';

    // Expand $elements if it's not already a jQuery object.
    if (typeof $elements != 'jQuery')
      $elements = $($elements);

    // Step through elements.
    $elements.each(function() {

      var	$e = $(this), $p,
      $parent = $e.parent();

      // No parent? Bail.
      if ($parent.length == 0)
        return;

      // Not moved? Move it.
      if (!$e.data(key)) {

        // Condition is false? Bail.
        if (!condition)
          return;

        // Get placeholder (which will serve as our point of reference for when this element needs to move back).
        $p = $e.prev();

        // Couldn't find anything? Means this element's already at the top, so bail.
        if ($p.length == 0)
          return;

        // Move element to top of parent.
        $e.prependTo($parent);

        // Mark element as moved.
        $e.data(key, $p);

      }

      // Moved already?
      else {

        // Condition is true? Bail.
        if (condition)
          return;

        $p = $e.data(key);

        // Move element back to its original location (using our placeholder).
        $e.insertAfter($p);

        // Unmark element as moved.
        $e.removeData(key);

      }

    });

  };

})(jQuery);



