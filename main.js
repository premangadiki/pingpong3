function gotresults(error , results){
 if(error){
     console.error(error);
 }

 else{
     console.log(results);
     object = results ;
     status = true;
 }
}

function setup() {
	canvas = createCanvas(500,400);
	canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded );
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("MODEL IS LOADED")
}

object=[];
status ="" ;

function draw(){
    image(video , 0, 0, 600, 500);
    if(status != ""){
        for(i=0 ; i < object.label ; i ++){
            percent = floor(object[i].confidence * 100);
            fill("#FF0000");
             text(object[i].label + " " + percent + "%" , object[i].x + 15 , object[i].y + 15);
             noFill();
             stroke("#FF0000");
             rect(object[i].x , object[i].y , object[i].width , object[i].height);
             if(object[i].label > object_name){

             }   
    }
}
}