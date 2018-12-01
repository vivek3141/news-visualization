from newsapi import NewsApiClient

API_KEY = "2cce71b97f664724b621d4e37e113009"


def get_news(topic):
    news_api = NewsApiClient(api_key=API_KEY)
    top_headlines = news_api.get_top_headlines(q=topic, language='en')
    print(top_headlines)


if __name__ == '__main__':
    get_news("urmumgay")
