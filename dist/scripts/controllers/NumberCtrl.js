(function() {
  function NumberCtrl($scope) {
    ctrl = this;

    var small = new Array(' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    var medium = new Array(' ',' ', ' twenty-', ' thirty-', ' forty-', ' fifty-', ' sixty-', ' seventy-', ' eighty-', ' ninety-');
    var hundred = ' hundred';

    var translateTwoDigits = function(num) {
      var spaced = ' ';
      var stringOfNumbers = num.toString();

      if (num < 100 && num > 19) {
        spaced += medium[parseInt(stringOfNumbers.charAt(0))];
        spaced += small[parseInt(stringOfNumbers.charAt(1))];
      } else {
        spaced = small[num];
      }

      return spaced;
    }

    var translate = function(num) {
      var spaced = ' ';
      var stringOfNumbers = num.toString();

      if (stringOfNumbers.length == 3) {
        spaced = small[parseInt(stringOfNumbers.charAt(0))] + hundred + ' and ';
        var twoDigitNumber = parseInt(stringOfNumbers.charAt(1) + stringOfNumbers.charAt(2));
        spaced += translateTwoDigits(twoDigitNumber);
      } else {
        spaced = translateTwoDigits(num);
      }

      return spaced;
    }

    var process = function(stringOfNumbers) {
    // special cases
      if (stringOfNumbers == '0') {
        return  'Zero';
      }

      if (stringOfNumbers == 1000) {
        return 'One Thousand';
      }

      if (stringOfNumbers == 100) {
        return 'One hundred';
      }

      if (stringOfNumbers.length >= 4) {
        return 'Number is too big';
      }

      return translate(parseInt(stringOfNumbers));
    }

    ctrl.convert = function() {
      var stringOfNumbers = $scope.input;
      $scope.output = process(stringOfNumbers);
    }
  }

  angular
    .module('numbersToWords')
    .controller('NumberCtrl', ['$scope', NumberCtrl]);
})();
