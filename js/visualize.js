
function drawGrid() {
    textSize(11);
    fill(120);
    for (var x = -width; x < width; x += 40) {
        line(x, -height, x, height);
        text(x, x + 1, 12);
    }
    for (var y = -height; y < height; y += 40) {
        line(-width, y, width, y);
        text(y, 1, y + 12);
    }
}

var list;
const canvasXsize = 1480;
const canvasYsize = 19 * 40;
var topic = "";
var x = [0, 0, 0, 0, 0, 400];
var y = [0, 0, 0, 0, 0, 250];

var xSpeed = [0, 0, 0, 0, 0, 0];
var ySpeed = [0, 0, 0, 0, 0, 0];

function findLongestWord(str) {
    let stringArray = str.split(" ");

    let orderedArray = [];
    for (k = 0; k < stringArray.length; k++) {
        orderedArray.push(stringArray[k].length);
    }

    return Math.max(...orderedArray);
}

function init(xSpeed, ySpeed, x, y) {
    for (z = 0; z < x.length - 1; z++) {
        x[z] = Math.floor(Math.random() * 400 + 200);
        y[z] = Math.floor(Math.random() * 400 + 100);
        xSpeed[z] = Math.ceil(Math.random() * 3);
        ySpeed[z] = Math.ceil(Math.random() * 3);
    }

    return (xSpeed, ySpeed, x, y);
}

function move(x, y, xSpeed, ySpeed) {
    for (j = 0; j < x.length; j++) {
        x[j] = x[j] + xSpeed[j];
        y[j] = y[j] + ySpeed[j];
    }
    return (x, y)
}

function checkHit(x, y, xSpeed, ySpeed) {
    for (z = 0; z < x.length; z++) {
        if (y[z] > 500) {
            ySpeed[z] = -Math.ceil(Math.random() * 3);
        }
        if (y[z] < 0) {
            ySpeed[z] = Math.ceil(Math.random() * 3);
        }
        if (x[z] > 600) {
            xSpeed[z] = -Math.ceil(Math.random() * 3);
        }
        if (x[z] < 0) {
            xSpeed[z] = Math.ceil(Math.random() * 3);
        }
    }
    return (xSpeed, ySpeed)
}


var connec;

function setup_2() {
    xSpeed, ySpeed, x, y = init(xSpeed, ySpeed, x, y);
}

function setup() {
    createCanvas(canvasXsize, canvasYsize);
    l = get_values(topic);
    news = ["", "", "", "", "", 'Loading'];
    rel = [2, 3, 4, 5, 6, 20];
    connec = [];
    xSpeed, ySpeed, x, y = init(xSpeed, ySpeed, x, y);
}

function drawLines(x, y, connec) {
    let nums = [];
    for (n = 0; n < connec.length; n++) {
        let strs = connec[n].split(",");
        for (o = 0; o < strs.length; o++) {
            nums.push(parseInt(strs[o]));
        }
        for (k = 0; k < nums.length; k++) {
            if (!isNaN(nums[k]) || !isNaN(n)) {
                line(x[n], y[n], x[nums[k]], y[nums[k]]);
            }
        }
        line(x[n],y[n], x[5],y[5]);
        nums = [];
    }
}
var counterthingy1000 = 0;
function mouseClicked(){
    if(counterthingy1000 === 0){
        frameRate(0);
        counterthingy1000 = 1;
    }
    else{
        counterthingy1000 = 0;
        frameRate(60);
    }
}

function draw() {
    background(255);
    translate(650, 100);
    for (i = 0; i < news.length; i++) {
        //Text size of the word depeding on importance
        let size = rel[i] * 5;
        //Largest word in a sentence for text wrap
        let len = findLongestWord(news[i]);

        //Setting text size
        textSize(size);
        //Displaying text
        if (i < 5) {
            textAlign(LEFT, TOP);
            text(news[i], x[i], y[i], (len) * size, size * news[i].length)
        } else {
            textAlign(CENTER, CENTER);
            text(news[5], x[5], y[5]);

        }
    }

    x, y = move(x, y, xSpeed, ySpeed);
    xSpeed, ySpeed = checkHit(x, y, xSpeed, ySpeed);
    drawLines(x, y, connec);
}

function get_values(topic) {
    var endpoint = "https://news-visual.herokuapp.com/?topic=" + topic;

    var text;

    function makeHttpObject() {
        try {
            return new XMLHttpRequest();
        } catch (error) {
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (error) {
        }
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (error) {
        }

        throw new Error("Could not create HTTP request object.");
    }

    var request = makeHttpObject();
    request.open("GET", endpoint, true);
    request.send(null);
    request.onreadystatechange = function () {
        textt = request.responseText;
        list = textt.split("<br>");
        news = list.slice(0, 5);
        if(topic === ""){
            topic = "Relevant News"
        }
        news.push(topic);
        connec = list.slice(5,10);
        urls = list.slice(10);
        for(mkmk=0; mkmk<5; mkmk++){
            console.log(mkmk);
            document.getElementById(mkmk.toString()).innerHTML = news[mkmk];
            document.getElementById(mkmk.toString()).href = urls[mkmk];
        }
    };
    setup_2();
}
let thebuttonthingy = document.getElementById("submit");
let thetexthingy = document.getElementById("text");
thebuttonthingy.addEventListener("click", e => {
    topic = thetexthingy.value;
    console.log(topic);
    setup();
});