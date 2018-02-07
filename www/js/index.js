/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    onGeoSuccess: function(position) {
        window.bb = {};
        window.bb["position"] = position;
    },

    // onError Callback receives a PositionError object
    //
    onGeoError: function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    },

    onAccelerometerSuccess: function(acceleration) {
        window.bb = {};
        window.bb["acceleration"] = acceleration;
    },

    onAccelerometerError: function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);

        // Bind other plugins
        navigator.geolocation.getCurrentPosition(this.onGeoSuccess, this.onGeoError);
        //navigator.accelerometer.getCurrentAcceleration(this.onAccelerometerSuccess, this.onAccelerometerError);

    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("Device is ready.")
        app.receivedEvent('deviceready');
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        console.log("Binding events");
        
        document.addEventListener('deviceready', app.onDeviceReady, false);
    },

    // Application Constructor
    initialize: function() {
        console.log("App is initializing");
        app.bindEvents();
    }

};

document.getElementById("GetPhoneLocation").addEventListener("click", function(){
    if (!window.bb || !window.bb.position) return;
    document.getElementById("Latitude").innerHTML = "Latitude: " + window.bb.position.coords.latitude;
    document.getElementById("Longitude").innerHTML = "Longitude: " + window.bb.position.coords.longitude;
    document.getElementById("Altitude").innerHTML = "Altitude: " + window.bb.position.coords.altitude;
    document.getElementById("Accuracy").innerHTML = "Accuracy: " + window.bb.position.coords.accuracy;
    document.getElementById("AltitudeAccuracy").innerHTML = "Altitude Accuracy: " + window.bb.position.coords.altitudeAccuracy;
    document.getElementById("Heading").innerHTML = "Heading: " + window.bb.position.coords.heading;
    document.getElementById("Speed").innerHTML = "Speed: " + window.bb.position.coords.speed;
    document.getElementById("Timestamp").innerHTML = "Time stamp: " + window.bb.position.timestamp;
});

document.getElementById("GetPhoneInfo").addEventListener("click", function(){
    if (!window.bb || !window.bb.position) return;
    document.getElementById("Cordova").innerHTML = "Device Model: " + device.model;
    document.getElementById("Platform").innerHTML = "Device Platform: " + device.platform;
    document.getElementById("Serial").innerHTML = "Device Serial: " + device.serial;
    document.getElementById("Version").innerHTML = "Device Version: " + device.version;
});

// document.getElementById("GetDeviceAcceleration").addEventListener("click", function(){
//     alert("Get Device Acceleration");
//     if (!window.bb || !window.bb.acceleration) return;
//     alert(window.bb.acceleration);
//     document.getElementById("AccelerationX").innerHTML = "Acceleration X: " + window.bb.acceleration.x;
//     document.getElementById("AccelerationY").innerHTML = "Acceleration Y: " + window.bb.acceleration.y;
//     document.getElementById("AccelerationZ").innerHTML = "Acceleration Z: " + window.bb.acceleration.z;
//     document.getElementById("Timestamp").innerHTML = "Time stamp: " + window.bb.acceleration.timestamp;
// });

document.getElementById("ShowDialog").addEventListener("click", function(){
    navigator.notification.prompt("Hello people.");
});

