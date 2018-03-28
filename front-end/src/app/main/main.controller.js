export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    
  }

  getFonts(fontFamily){
    // console.log(fontFamily);
    var vm = this;
    // sending a get response to my node api
    this.$http.get('http://localhost:5000/api/fonts').then(function(result){
      // console.log(result.data.items);
      // grabbing the list of fonts
      vm.fonts = result.data.items;

      // console.log("------***--------");
      // console.log(fontFamily);
      // console.log("------***--------");

      // if a font has not been chosen then use the browsers default
      if (fontFamily == undefined) {
        vm.selected = null;
      } else {
        vm.selected = fontFamily;
      }
      
      // console.log("--------------");
      // console.log(vm.fonts.items);
    });
    
  }

  getFont(font){
    this.getFonts(font);
  }

}
