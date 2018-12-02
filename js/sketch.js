const canvasXsize = 800;
const canvasYsize = 500;

var x = [0, 0, 0, 0, 400];
var y = [0, 0, 0, 0, 250];

var Xspeed = [0, 0, 0, 0, 0];
var Yspeed = [0, 0, 0, 0, 0];

function findLongestWord(str) {
    let stringArray = str.split(" ");

    let orderedArray = [];
    for (k = 0; k < stringArray.length; k++) {
        orderedArray.push(stringArray[k].length);
    }

    return Math.max(...orderedArray);

}

function init(Xspeed, Yspeed, x, y) {


}

function setup() {
    createCanvas(canvasXsize, canvasYsize);
    news = ['Bad Bad Apple is gay', 'Vivek is damn gay with shreyas',
        'i wanna win', 'heeelll yeaaa', 'slavesux'];
    textAlign(CENTER, CENTER);
    rel = [3, 4, 5, 6, 10];

}


function draw() {
    background(235, 235, 235);

    for (i = 0; i < news.length; i++) {
        let size = rel[i] * 5;
        textSize(size);
        let len = findLongestWord(news[i]);
        text(news[i], x[i], y[i]);
        space = news[i].length * size;
    }
}