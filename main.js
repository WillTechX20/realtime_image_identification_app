var canvas=null;
var video=null;
var newImageClassifier=null;

function preload(){
}

function onModelLoaded(){
    console.log('Model Loaded!');
}

function gotResult(result, error){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.querySelector('#result_object_name').innerHTML=result[0].label;
        document.querySelector('#result_object_name').innerHTML=result[0].label.confidence.toFixed(3);
    }
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    newImageClassifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NmIQ1uMTv/model.json', onModelLoaded);
}

function draw(){
    image(video, 0, 0, 300, 300);
    newImageClassifier.classifiy(video, gotResult);
}
