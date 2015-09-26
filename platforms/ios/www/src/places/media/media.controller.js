angular.module('places')
.controller('mediaCtrl', function($scope, $cordovaMedia, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    $scope.music=function(){
      window.plugins.iOSAudioPicker.getAudio(success,error,'false','false');
    };
    //var multiple = 'false'; // Will allow user to select multiple songs.
    //var icloud = 'false'; // Will only show songs available locally on device.

    $scope.playsong = function() {
      //console.log('foo');
      document.querySelector('#debug').innerHTML = 'texte';
      debugDiv = document.querySelector('#debug');
      debugDiv.innerHTML = 'DEBUG PLAY SONG<br/>';
    }
  });


function success(data)
{
  debugDiv = document.querySelector('#debug');
  debugDiv.innerHTML = 'DEBUG<br/>' + JSON.stringify(data);
  console.log(JSON.stringify(data));
}

function error(e)
    {
      debugDiv = document.querySelector('#debug');
      debugDiv.innerHTML = 'ERROR<br/>';
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
