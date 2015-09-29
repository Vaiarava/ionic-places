angular.module('places')
.controller('mediaCtrl', function($scope, $cordovaMedia, $ionicPlatform) {

  window.onerror = function(message, url, lineNumber) {
      console.log("Error: "+message+" in "+url+" at line "+lineNumber);
    }

  $ionicPlatform.ready(function() {
    $scope.music=function(){
      window.plugins.iOSAudioPicker.getAudio(success,error,'false','false');
    };
    //var multiple = 'false'; // Will allow user to select multiple songs.
    //var icloud = 'false'; // Will only show songs available locally on device.

    $scope.playsong = function() {
      console.log(Media);
      $cordovaMedia.play(media);

    }

    $scope.delmsong = function() {
      document.querySelector('#titlebtn').innerHTML = '';
      document.querySelector('#image').src ='';
    }

  });


function success(data)
{
  var filename = data[0]['exportedurl'];
  var title = data[0]['title'];
  var artist = data[0]['artist'];
  var imageData = data[0]['image'];
  document.querySelector('#titlebtn').innerHTML = title;

  var image = document.querySelector('#image');
  image.src = 'data:image/png;base64,' + imageData;

  var media = new Media(filename, function() {
      media.play();
    },

    function(e) {

    }
  );
}

function error(e)
    {
      console.log(e);
    }

});
