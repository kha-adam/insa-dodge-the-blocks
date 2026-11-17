const obstacles = [];

const Y=400; //Taille de la fenetre, à voir
const X=400;

function RandomPos(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function IsOverlapping(obstacle,player){
    return (obstacle.x>player.x && obstacle.x<player.x+height && obstacle.y>play.y && obstacle.player.y+width);
}
    


function spawnObstacle(){
    const new_obstacle = {
	x: RandomPos(0,Y-20),
	y: 0,
	size : (20,20),
	speed : 1 };
    obstacles.push(new_obstacle);
}


function updateObstacles(){
    for (let i=0; i<obstacles.length,i++){
	if  (obstacles[i].x+1<X-20) {
	    obstacles[i].x=obstacles[i].x+1; // Descente de 1, à voir
	    const player= ;
	    if (IsOverlapping(obstacles[i],player)){
		
	    }
	}
	else {
	    obstacles.splice(i,i);    //suppression element
	}
    }
}


function checkCollisions(){
}
