angular.module('places')
.controller('mediaCtrl', function($scope, $cordovaMedia, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    $scope.music=function(){
      window.plugins.iOSAudioPicker.getAudio(success,error,'false','false');
    };
    //var multiple = 'false'; // Will allow user to select multiple songs.
    //var icloud = 'false'; // Will only show songs available locally on device.

    $scope.playsong = function() {
      var media = new Media("music/music/AU FIL DE L'HISTOIRE 30.10.2013.mp3", function() {});
      media.play();
      //console.log('foo');
    }
  });


function success(data)
{
  var filename = data[0]['ipodurl'];
  console.log('--------------------------------');
  console.log(filename);
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
