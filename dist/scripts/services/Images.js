(function () {
  function Images() {
    var stringOfNumbers = $scope.input
    var image = {'image' : 'image.jpeg'};

    for (var i = 0; i < stringOfNumbers.length; i++) {
      return image;
    };
    return Images;
    // Images.repeat(i);
  }

  angular
    .module('numbersToWords')
    .factory('Images', ['Images'])
})
