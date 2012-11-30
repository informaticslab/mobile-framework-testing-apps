(function() {

    var watchId = null;
 
 console.log('Got in accelerometer js.');

    $('#accelerometer').bind('pageshow', function() {
        var onSuccess = function(acceleration) {
            // Scale the accelerometer values from [0, 1] to [0, 100]
            // in order to display in the HTML range element
            $('#acceleration-x').val(acceleration.x * 100).slider('refresh');
            $('#acceleration-y').val(acceleration.y * 100).slider('refresh');
            $('#acceleration-z').val(acceleration.z * 100).slider('refresh');
            console.log('Got acceleration update.');

        };

        var onFail = function() {
            console.log('Failed to get acceleration');
        };

        var options = {
            frequency: 250
        };

        watchId = navigator.accelerometer.watchAcceleration(onSuccess, onFail, options);
        sconsole.log('Started accelration watch.');
    });

    $('#accelerometer').bind('pagehide', function() {
        navigator.accelerometer.clearWatch(watchId);
    });

})();