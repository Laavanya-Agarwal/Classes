class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play')
    this.greeting = createElement('h3');;
    this.title = createElement('h2')
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50,0);
  
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);

    //=> means function
    //calling a function which doesn't have any name
    //if i write function, then the things under it won't show 
    //because this.button is from the same class, but if I wrote a function after that and immidiately call it after, then it starts looking for the button
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      //player
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70,displayHeight/4)
    });
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
}