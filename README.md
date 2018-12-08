# news-visualization
A tool to visualize news articles and their relevance using machine learning. It makes a network of
news articles based on the current news or a topic typed in. Connections represent similarities,
which are calculated using NLP.
## Requirements
Install the requirements by
* make
```bash
sudo make
``` 
* pip
```
sudo pip3 install -r requirements.txt
```
NOTE: Superuser is only required if python is stored in `/usr/local`.
## Built Using:
* `p5js` for visualization
* `bootstrap` for the front end
* Hosted on `heroku` for back end. NOTE: This is sometimes shut down for other projects.
* `flask` for the API, `flask-cors` to make it run well on Heroku.
* `Newsapi`, `Newspaper3k` for getting the news and parsing.
## Results
<img src="https://raw.githubusercontent.com/vivek3141/news-visualization/master/img/news.png"></img>
## Running it locally
You can change the host in `api.py` and change the address in `visualize.js`.<br>
For example, `api.py` by default will run on `0.0.0.0` on port `5000`. Changing 
```js
var endpoint = "https://news-visual.herokuapp.com/?topic=" + topic;
```
to 
```js
var endpoint = "http://0.0.0.0:5000/?topic=" + topic;
```
accesses the local api.<br>
NOTE: Make sure to change to `http://` instead of `https://`