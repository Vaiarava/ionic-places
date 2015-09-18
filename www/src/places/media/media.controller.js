angular.module('places')
.controller('mediaCtrl', function($scope, $cordovaMedia, $ionicPlatform) {
  $ionicPlatform.ready(function() {
$scope.music=function(){
   window.plugins.iOSAudioPicker.getAudio(success,error,multiple,icloud);}
   var multiple = 'false' // Will allow user to select multiple songs.

   var icloud = 'false' // Will only show songs available locally on device.
  });


function success(data)
{
  console.log(JSON.stringify(data));
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
