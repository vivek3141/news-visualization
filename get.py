from newsapi import NewsApiClient
from functions import *

API_KEY = "2cce71b97f664724b621d4e37e113009"


def get_news(topic):
    news_api = NewsApiClient(api_key=API_KEY)
    top_headlines = news_api.get_top_headlines(q=topic, language='en')
    articles = top_headlines['articles']
    top = []
    for i in range(0,5):
        top.append([articles[i]['title']])

    l_print(top)


if __name__ == '__main__':
    get_news("trump")
