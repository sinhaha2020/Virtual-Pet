//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogimg;
var milk;
var foodRemaining = 20;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() 
{
  createCanvas(500, 500);

  dog = createSprite(250,250,20,30);
  dog.addImage(dogimg);
  dog.scale = 0.12;

  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
  milk = createSprite(50,250,50,100);
  milk.shapeColor = "white";

}


function draw() 
{ 
  background(46,139,87);
  
  if(keyDown("UP_ARROW")){

   

    foodRemaining = foodRemaining-1;

    dog.addImage(happyDog);
  } 
  

  if(keyWentUp("DOWN_ARROW")){
    milk.x = milk.x-5;
    milk.y = milk.y-0.01;
  }


  fill("white");
  textSize(25);
  text("Food Remaning:" +foodRemaining,100,150);

 
  textSize(20);  
  text("Note:Press up arror key to feed DRAGO milk",40,20);

  textSize(20);
  text("Milk",35,320);

  //console.log(milk.y);

  drawSprites();
  //add styles here

}

function readStock(data)
{
  foodS = data.val();
}

function WriteStock(x)
{

  if(x = 200){
    x = 0;
  }else{
    x = x-1;
  }

    database.ref('/').update({
    food:x
  })
}


