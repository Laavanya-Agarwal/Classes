class Form{
    constructor(){}

    display(){
        //to make a title
        //H1 is biggest size, H6 is smallest
        var title = createElement("H2");
        title.html("CarRacingGame");
        title.position(130,30);

        //to make input
        var input = createInput("name");
        input.position(130,160);

        //to make button
        var button = createButton("play");
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playercount = playercount+1;
            player.updateName(name);
            player.updateCount(playercount);

            //to make greeting
            var greeting = createElement("H3");
            greeting.html("hello " + name);
            greeting.position(130,160);
        });
    }
}