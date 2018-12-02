from newsapi import NewsApiClient
from src.compare import getkeywords
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
    ret_text = ""
    for i in range(0, 5):
        title.append(articles[i]['title'])
        url.append(articles[i]['url'])
        article = Article(url[i])
        article.download()
        article.parse()
        text.append(article.text)
        keywords.append(getkeywords(text[i]))
        ret_text += title[i] + "<br>"
    comparisons = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    for num1, i in enumerate(keywords):
        for string in i:
            for num, k in enumerate(keywords):
                if string in k:
                    comparisons[num1][num] += 1
    similarities = [[], [], [], [], []]
    for num1, i in enumerate(comparisons):
        for num2, k in enumerate(i):
            if k > 1 and num2 != num1:
                similarities[num1].append(num2)
    for i in similarities:
        ret_text += str(i)[1:-1] + "<br>"
    for i in text:
        ret_text += i + "<br>"
    return ret_text


if __name__ == '__main__':
    print(get_news("trump"))
