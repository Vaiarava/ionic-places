angular.module('places')
.controller('mediaCtrl', function($scope, $cordovaMedia, $ionicPlatform) {
  $ionicPlatform.ready(function() {
window.plugins.iOSAudioPicker.getAudio(success,error,multiple,icloud);

  });


function success(data)
{
  console.log(JSON.stringify(data));
}

function error(e)
    {
      console.log(e);
    }

  var multiple = 'true' // Will allow user to select multiple songs.

  var icloud = 'false' // Will only show songs available locally on device.

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
