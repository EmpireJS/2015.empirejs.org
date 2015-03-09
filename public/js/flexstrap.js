"use strict";

if (typeof window == "object") {

  window.Flexstrap = {};
} else {

  var Flexstrap = {
    Component: require("./base/component"),
    NavigationComponent: require("./navigation/component")
  };

  module.exports = Flexstrap;
}
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Component = function Component() {
  var options = arguments[0] === undefined ? {} : arguments[0];

  _classCallCheck(this, Component);

  if (!options.$) {
    throw new Error("options.$ must be defined.");
    return;
  }

  if (!options.el) {
    throw new Error("options.el must be defined.");
    return;
  }

  this.$ = options.$;
  this.$el = this.$(options.el);
};

try {
  module.exports = Component;
} catch (e) {
  Flexstrap.Component = Component;
}
"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Component;

try {
  Component = require("../base/component");
} catch (e) {
  Component = Flexstrap.Component;
}

var NavigationComponent = (function (_Component) {
  function NavigationComponent() {
    var options = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, NavigationComponent);

    _get(Object.getPrototypeOf(NavigationComponent.prototype), "constructor", this).call(this, options);

    var $navigation = this.$el,
        $menuIcon = $navigation.find(".icon-menu"),
        $menuToggle = $navigation.find(".navigation-toggle"),
        $navigationDropDown = $navigation.find(".navigation-dropdown"),
        $navigationDropDownMenu = $navigation.find(".navigation-dropdown-menu"),
        $window = $(window);

    // Mobile menu icon
    $menuToggle.on("click", function (e) {
      e.preventDefault();

      if ($menuIcon.hasClass("animate-rotate-half")) {

        $menuIcon.removeClass("animate-rotate-half");
        $menuIcon.addClass("animate-counter-rotate-half");
      } else {

        $menuIcon.removeClass("animate-counter-rotate-half");
        $menuIcon.addClass("animate-rotate-half");
      }

      $navigation.toggleClass("navigation-open");
    });

    // Small device screen or larger navigation dropdown
    $(".navigation-dropdown a, .navigation-dropdown li").on("mouseover", function (e) {

      $navigationDropDownMenu.css({ left: -$navigationDropDown.offset().left });
    });

    $window.on("resize", function (e) {

      if ($navigation.hasClass("navigation-open") && $window.outerWidth() >= 768) {

        $navigationDropDownMenu.css({ left: -$navigationDropDown.offset().left });
      }
    });
  }

  _inherits(NavigationComponent, _Component);

  return NavigationComponent;
})(Component);

try {
  module.exports = NavigationComponent;
} catch (e) {
  Flexstrap.NavigationComponent = NavigationComponent;
}