var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");
var images=["download (1).jpeg","download (2).jpeg","download.jpeg","download.png"];
var random=Math.floor(Math.random() * 4);
var car_height=90;
var car_width=100;
var background="https://i.postimg.cc/KzWwHPcq/racing.gif";
var car="https://i.postimg.cc/YqdnnNX1/car1.png";
var car_x=10;
var car_y=10;
function upload(){
    var backgroundimage=new Image();
    backgroundimage.onload=uploadbcg;
    backgroundimage.src=background;
    var car2=new Image();
    car2.onload=uploadcar;
   car2.src=car;
}
function uploadbcg(){
    context.drawImage(backgroundimage,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    context.drawImage(car2,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",efony);
function efony(e){
    var key=e.keyCode;
    if(key=='38'){
        up();
    }
    if(key=='40'){
        down();
    }
    if(key=='36'){
        right();
    }
    if(key=='37'){
        left();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log(rover_x,rover_y)
        uploadbcg();
        uploadcar();
    }

    
    
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadbcg();
        uploadcar();
    }
    
    
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadbcg();
        uploadcar();
    }
    
    
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadbcg();
        uploadcar();
    }
    
    
}

