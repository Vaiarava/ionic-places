# ionic-places
Ionic course training


* Media  
- window.plugins.iOSAudioPicker.getAudio
- select button : $scope.music using iOSAudioPicker
- play button : $scope.playsong using $scope.loadedMedia = not working cause not reading M4A file and MP3 file are converted in M4A on iOS device.
- delete button : problems with image.src couldn't be deleted with empty string.
tried different solutions as seen in comments in media.controller.js
Took me about 1 1/2 week to make it work.
with no tuto and lucky solutions working; I decided to put a space in strings to force the image to disappear while clicking on the the delete button but it didnt work. I then put words in strings and it didn't work on the app while it did appear in the console; Finally, as I was about to abandonned that function, I put the data file source name in strings and it is done. Alleluia.

Should've tried to use another plugin but I already make it work enough and didn't have time to restart the process with a new plugin. Such a shame that songs can't be played.

==> Results I was expecting: - use the multiple song selection mode
                             - add buttons: repeat and shuffle.


* Add place to my place
- created a $rootScope and a push function to connect Add place and My place controllers.
- took me hours to make it work : name and description were uneasy to configure as it was automatically calling new places files : "Addplace".
Took me more time to understand that I should call an event and not only data in the $rootScope.

==> Results I was expecting :
My place :  - be able to select an image in a search bar / rename / send / delete it.
            - change items position in the list

Add place : - take multiple pics & select the ones you want to transfer in MyPlace.
            - add a plugin filter to perform the pictures quality

* Git :
Couldn't push / merge / rebase my last branch on the master branch. My project can then be found in my last branch called my-media-final. 
