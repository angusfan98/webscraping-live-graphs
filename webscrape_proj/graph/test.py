import bs4
import requests
from bs4 import BeautifulSoup

def price_value(stockSymbol):
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'}
    url = 'https://www.livecoinwatch.com/price/'+ stockSymbol
    r = requests.get(url,headers=headers,timeout=10)
    soup = bs4.BeautifulSoup(r.text,"lxml")
    price = soup.find('div',{'class':'cion-item coin-price-large'}).find('span').text
    price = price[1:]
    return price

