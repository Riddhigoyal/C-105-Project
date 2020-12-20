Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpg',
     jpg_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    });
}

console.log("ml5 version",ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9aKU5UD7s/model.json',modelLoaded);

function modelLoaded(){
    console.log ("model loaded successfully");
}

function check(){
    img= document.getElementById("captured_img");
    classifier.classify(img,got_result);
}

function got_result(error,results){
  if(error){
      console.log (error);
  }
  else{
     console.log (results);
     document.getElementById("result_object_name").innerHTML=results[0].label;
     document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}