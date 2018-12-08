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