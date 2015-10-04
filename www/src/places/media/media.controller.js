angular.module('places')
.controller('mediaCtrl', function($scope, $cordovaMedia, $ionicPlatform) {
  $scope.loadedMedia = '';
  $scope.imageSrc = '';
  //var baseSrc = 'data:image/png;base64,';
  //$scope.fullSrc = baseSrc;
  window.onerror = function(message, url, lineNumber) {
      console.log("Error: "+message+" in "+url+" at line "+lineNumber);
  };

  $ionicPlatform.ready(function() {
    $scope.music=function(){
      window.plugins.iOSAudioPicker.getAudio(success,error,'false','false');
    };
    //var multiple = 'false'; // Will allow user to select multiple songs.
    //var icloud = 'false'; // Will only show songs available locally on device.

    $scope.playsong = function() {
      console.log($scope.loadedMedia);
      // TODO : MEDIA IS LOADED AS M4A AND NEEDS MP3 TO WORK
      // $cordovaMedia.play($scope.loadedMedia);

    }

    $scope.delmsong = function() {
      document.querySelector('#titlebtn').innerHTML = '';
      document.querySelector('#image').src = 'data:image/png;base64,';
    }

  });

function success(data) {
  console.log(data);
  var filename = data[0]['exportedurl'];
  var title = data[0]['title'];
  var artist = data[0]['artist'];
  var imageData = data[0]['image'];
  document.querySelector('#titlebtn').innerHTML = title;

  document.querySelector('#image').src = 'data:image/png;base64,' + imageData;

//  $scope.fullSrc = baseSrc;
  //$scope.fullSrc += imageData;

//  console.log($scope.fullSrc);

  // TODO : TRYING TO CREATE A NEW MEDIA WITH M4A BUT NEEDS MP3
  //$scope.loadedMedia = new Media(filename, function() {
      // media.play();
  //  }, function(e) {
    //  console.log(e);
    //});
}

function error(e)
    {
      console.log(e);
    }

  //  $scope.$watch('fullSrc', function (newVal, oldVal) {
    //console.log('new', newVal);
    //console.log('old', oldVal);
    //return $scope;
  //});
});
