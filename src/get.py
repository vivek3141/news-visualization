from newsapi import NewsApiClient
from functions import *
from compare import getkeywords
from newspaper import Article

API_KEY = "2cce71b97f664724b621d4e37e113009"


def get_news(topic):
    news_api = NewsApiClient(api_key=API_KEY)
    top_headlines = news_api.get_top_headlines(q=topic, language='en')
    articles = top_headlines['articles']
    title = []
    url = []
    text = []
    keywords = []
    for i in range(0, 5):
        title.append(articles[i]['title'])
        url.append(articles[i]['url'])
        article = Article(url[0])
        article.download()
        article.parse()
        text.append(article.text)
        keywords.append(getkeywords(text[0]))


if __name__ == '__main__':
    get_news("trump")