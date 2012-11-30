// JavaScript Document
(function() {

    var onSuccess = function(uri) {
        $('#camera-image').css({
            'background-image': 'url('+uri+')',
            'background-size':  '100%'
        });
    };

    var onFail = function() {
        console.log('Failed to get an image');
    };

    $('#camera button[data-icon="plus"]').bind('tap', function() {
		console.log("Got here !");
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.DATA_URL
        });
    });

    $('#camera button[data-icon="search"]').bind('tap', function() {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        });
    });

})();