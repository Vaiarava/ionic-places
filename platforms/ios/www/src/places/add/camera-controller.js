angular.module('places')
.controller('PictureCtrl', function($scope, $cordovaCamera){

	
$scope.imageSrc = "";

$scope.getPicture = function(){

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

	    $cordovaCamera.getPicture(options).then(function(imageData) {
	      var image = document.getElementById('myImage');
	      $scope.image.src = "data:image/jpeg;base64," + imageData;
	    }, function(err) {
	      // error
	    });
    };

});