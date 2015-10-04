angular.module('places')
	.controller('AddPlaceCtrl', function($rootScope, $scope, $ionicPlatform, $cordovaCamera) {

	$scope.imageSrc = "";
	$scope.newPlace = {};

	$scope.maphoto = function () {
		$scope.newPlace.image = $scope.imageSrc;
		var toPush = $scope.newPlace;
		$scope.newPlace = {};

		$scope.$emit('listAdded', toPush);
	};

	$scope.openPicture = function(){

		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 100,
			targetHeight: 100,
			saveToPhotoAlbum: true
		};


		if(navigator.camera){

			$cordovaCamera.getPicture(options).then(function(imageData) {

				$scope.imageSrc  = "data:image/jpeg;base64," + imageData;

			}, function(err) {

				alert("error : "+err);
			});

		}else{
			console.log("Camera plugin not available in the browser.")
		}

	}

});
