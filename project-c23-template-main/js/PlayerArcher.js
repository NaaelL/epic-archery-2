class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    
    Matter.Body.setAngle(this.body, -90); 
}

display() {
  var pos = this.body.position;
  var angle = this.body.angle;
  
  //add the code to move arrow up and down
  if (keyIsDown(DOWN_ARROW) && angle < -73) {
    angle += 1;
    Matter.Body.setAngle(this.body, angle);
  }

  if (keyIsDown(UP_ARROW) && angle > -103) {
    angle -= 1;
    Matter.Body.setAngle(this.body, angle);
  }

  push();
  translate(this.x, this.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, -255, 350, this.width, this.height);
  pop();
}
}