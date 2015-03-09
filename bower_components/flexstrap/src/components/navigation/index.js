var Component;

try { Component = require('../base/component') } catch(e) { Component = Flexstrap.Component }

class NavigationComponent extends Component {

  constructor(options = {}) {
    super(options)

    var $navigation             = this.$el,
        $menuIcon               = $navigation.find('.icon-menu'),
        $menuToggle             = $navigation.find('.navigation-toggle'),
        $navigationDropDown     = $navigation.find('.navigation-dropdown'),
        $navigationDropDownMenu = $navigation.find('.navigation-dropdown-menu'),
        $window                 = $(window)

    // Mobile menu icon
    $menuToggle.on('click', (e) => {
      e.preventDefault()

      if($menuIcon.hasClass('animate-rotate-half')) {

        $menuIcon.removeClass('animate-rotate-half')
        $menuIcon.addClass('animate-counter-rotate-half')

      }

      else {

        $menuIcon.removeClass('animate-counter-rotate-half')
        $menuIcon.addClass('animate-rotate-half')

      }

      $navigation.toggleClass('navigation-open')

    })

    // Small device screen or larger navigation dropdown
    $('.navigation-dropdown a, .navigation-dropdown li').on('mouseover', (e) => {

      $navigationDropDownMenu.css({left: -$navigationDropDown.offset().left})

    })

    $window.on('resize', (e) => {

      if($navigation.hasClass('navigation-open') && $window.outerWidth() >= 768) {

        $navigationDropDownMenu.css({left: -$navigationDropDown.offset().left})

      }

    })

  }

}

try { module.exports = NavigationComponent } catch(e) { Flexstrap.NavigationComponent = NavigationComponent }
