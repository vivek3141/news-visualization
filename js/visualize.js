var news;
var xcord;
var ycord;
const canvasXsize = 1000;
const canvasYsize = 700;
var rel;
var imporVal;
var direc = [0, 0, 0, 0, 0];
var speed = [0, 0, 0, 0, 0];
var xbound = 700;
var ybound = 700;
var x = [0, 0, 0, 0, 0];
var y = [0, 0, 0, 0 ,0];
var change = 30;


function findLongestWord(str) {
  var stringArray = str.split(" ");

  var orderedArray = [];
  for (k =0; k < stringArray.length; k++){
  	orderedArray.push(stringArray[k].length);
  }

  return Math.max(...orderedArray);

}

function _init_(impor, cordX, cordY, dir, sped){
	for(z =0; z<impor.length; z++){
		var maxX = (canvasXsize-xbound)/2 + xbound;
		var maxY = (canvasYsize-ybound)/2 + ybound;
		var minX = (canvasXsize-xbound)/2;
		var minY = (canvasYsize-xbound)/2;
		cordX[z] = Math.floor(Math.random()*(maxX-minX) +minX);
		cordY[z] = Math.floor(Math.random()*(maxY - minY) + minY);
		dir[z] = Math.floor(Math.random()*360);
		sped[z] = Math.ceil(Math.random()*4);
	}
	maxVal = Math.max(impor);

	cordX[impor.indexOf(maxVal)] = canvasXsize/2;
	cordY[impor.indexOf(maxVal)] = canvasYsize/2;

	return (maxVal, cordX, cordY, direc, speed);
}

function upDateCord(xcord, ycord, imporVal, direc, speed){
	for (l=0; l<direc.length; l++){
		if(l != imporVal){
			var addx = Math.cos(direc[l])*speed[l];
			var addy = Math.sin(direc[l])*speed[l];
			if(xcord[l] + addx < (canvasXsize-xbound)/2 || xcord[l] + addx > xbound + (canvasXsize-xbound)/2){
				xcord[l] = xcord[l] - addx
			}
			if(ycord[l] + addy < (canvasYsize-ybound)/2 || ycord[l] + addy > ybound + (canvasYsize-ybound)/2){
				ycord[l] = ycord[l] - addx
			}

			xcord[l] = xcord[l] + addx;
			ycord[l] = ycord[l] + addy;
		}
	}

	return (xcord, ycord)

}

function updateSpeed(xcor, ycor, ind, s){
	s[ind] = Math.ceil(Math.random()*4);
	return s
}

function updateDirection(X, Y, t, d){
	d[t] = Math.floor(Math.random()*(60)+30) + d[t]+180;
	if (d[t] > 360){
		d[t] = d[t]%360;
	}
	return d
}

function checkBound(xcord, ycord, dir, speed){
	for (b=0; b<xcord.length; b++){
		if(xcord[b] > xbound+(canvasXsize-xbound)/2 || ycord[b] > ybound+(canvasYsize-ybound)/2 || xcord[b] < (canvasXsize-xbound)/2 || ycord < (canvasYsize-ybound)/2){
			dir = updateDirection(xcord, ycord, b, dir);
			speed = updateSpeed(xcord, ycord, b, speed);
		}
	}

	return (dir, speed);

}

function createLines(xcord, ycord){


}


function setup(){
	createCanvas(canvasXsize, canvasYsize);
	news = ['Bad Bad Apple is gay', 'Vivek is damn gay with shreyas',
	'slavesux', 'i wanna win', 'heeelll yeaaa'];
	no =  news;
	rel = [3,10, 4, 6, 5];
	xcord = 5;
	imporVal, x, y, direc, speed = _init_(rel, x, y, direc, speed);
}

function draw() {
    //textAlign(CENTER,CENTER);
	background(235, 235, 235);
	for(i=0; i<news.length; i++){
		var size = rel[i]*5;
		textSize(size);
		var len = findLongestWord(news[i]);
		if(rel[i] == 10){
			x[i] = canvasXsize/2 - news[i].length;
			y[i] = canvasYsize/2 - news[i].length;
		}

		text(news[i], x[i], y[i], (len)*size, size*news[i].length);
		space = news[i].length*size;

	}
	createLines();
	x,y = upDateCord(x, y, imporVal, direc, speed);
	direc, speed = checkBound(x,y, direc, speed);
}