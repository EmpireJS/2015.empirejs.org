if(typeof window == 'object') {

  window.Flexstrap = {}

} else {

  var Flexstrap = {
    Component: require('./base/component'),
    NavigationComponent: require('./navigation/component')
  }

  module.exports = Flexstrap

}
