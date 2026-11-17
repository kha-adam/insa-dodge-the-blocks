const obstacles = [];

const L=400; //Taille de la fenetre, à voir

function RandomPos(min,max){
    return Math.floor(Math.random()*(max-min+1)+min;
};


function spawnObstacle(){
    const new_obstacle = {
	position : (RandomPos(0,L),0),
	size : (20,20),
	speed : 1 };
    obstacles.push(new_obstacle);
}


function updateObstacles(){
    for (elem of obstacles){
	elem.position[1]=elem.position[1]+1; // Descente de 1, à voir
    }
}


function checkCollisions(){
}
