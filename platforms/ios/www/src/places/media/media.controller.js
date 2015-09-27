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
      console.log('foo');
      console.log(Media);
      var media = new Media("music/music/AU FIL DE L'HISTOIRE 30.10.2013.mp3", function() {});
      $cordovaMedia.play(media);
      //console.log('foo');
    }
  });


function success(data)
{
  var filename = data[0]['ipodurl'];
  var title = data[0]['title'];
  var artist = data[0]['artist'];
  document.querySelector('#titlebtn').innerHTML = title;
  console.log('--------------------------------');
  console.log(data);
  console.log('--------------------------------');
  var media = new Media(filename, function() {});
  /*
  var media = new Media(filename, function() {
      console.log('@@@@@@@@@@ song loaded');
      media.play();
    },
    function() {
      console.log('@@@@@@@@@@ song error');
    }
  );
  */
  //media.play();
}

function error(e)
    {
      console.log(e);
    }

  /*
	$scope.play = function() {
		var src = "media";
		var media = $cordovaMedia.newMedia(src).then(function() {
			media.play();
		}, function () {
			// error
		});
  }*/
});
