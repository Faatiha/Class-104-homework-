Webcam.set({
    width:360,
    height:300,
    image_format:'png',
    png_format:90
});

 camera = document.getElementById("camera");

 Webcam.attach('#camera');

 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("results").innerHTML = '<img src="'+data_uri+'">';
     });
 }

 console.log('ml5 version: ', ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OJz1SA7YN/model.json', modelLoaded);

 function modelLoaded(){
     console.log("Model is loaded!");
 }