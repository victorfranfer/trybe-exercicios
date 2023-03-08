# Baseando-se em uma página contendo detalhes sobre um livro (http://books.toscrape.com/catalogue/the-grand-design_405/index.html),
# faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.
import requests
from parsel import Selector

class booksCrawler:
    def get_book(path: str):
        response = requests.get(path)
        # print(response.text)
        selector = Selector(text=response.text)
        title = selector.css("h1::text").get()
        price = selector.css(".product_main > .price_color::text").re_first(r"£\d+.\d{2}")
        description = selector.css("#product_description ~ p::text").get()
        suffix = "...more"
        if description.endswith(suffix):
            description = description[:-len(suffix)]
        cover = path[:36] + selector.css("#product_gallery img::attr(src)").get()
        print(title, price, description, cover, sep=",")

    
    get_book("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")



# description => <p> irmã de uma <div id="product_description" class="sub-header"> pai de <h2>Product Description</h2>
# title => <h1> filha da <div class="col-sm-6 product_main">
# price => <p class="price_color"> irmã da <div class="col-sm-6 product_main">
# image url => <img src="../../media/cache/9b/69/9b696v2064d6ee387774b6121bb4be91.jpg" alt="The Grand Design" />