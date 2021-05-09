var hypnotic_ball,database,position;

function setup(){
    createCanvas(500,500);
    //to call the databse created and store it in the variable database
    database = firebase.database();

    hypnotic_ball = createSprite(250,250,10,10);
    hypnotic_ball.shapeColor = "red";
    
    //.ref is to refer to value in the database that we care about
    var hypnotic_ball_pos = database.ref("Ball/Position");

    //.on creates a listener, which keeps on listening to the changes made to the file
    //so that whenever its changed, the things in the brackets are called
    hypnotic_ball_pos.on("value",readPosition,showError);
}

function draw(){
    background("white");

    if (position !== undefined) {
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
    }
    drawSprites();
}

function changePosition(x,y){
    hypnotic_ball.x = hypnotic_ball.x + x;
    hypnotic_ball.y = hypnotic_ball.y + y;

    //.set is used to write the values inside the database
    database.ref("Ball/Position").set(
        {x:position.x+x,
         y:position.y+y}
        )
}

function readPosition(data){
    //.val means value
    //used so that the position value is added (of the x and y created in the database)
    position = data.val()
    hypnotic_ball.x = position.x
    hypnotic_ball.y = position.y
}

function showError(){

}