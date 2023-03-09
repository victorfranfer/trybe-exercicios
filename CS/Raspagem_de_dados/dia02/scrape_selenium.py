from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.firefox.options import Options

firefox = webdriver.Firefox()

# Instancia um objeto da classe 'Options'
options = Options()
# Adiciona um argumento passando o parâmetro '--headless'
options.add_argument('--headless')

# Define que a instância do navegador deve usar as options definidas
firefox = webdriver.Firefox(options=options)

firefox.get ("https://books.toscrape.com/")


# define função que fará o scrape da url
def scrape(url):
    firefox.get(url)

    books = []

    # itera nos elementos com a classe especificada
    for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
        #Cria dict vazio para guardar elementos capturados
        new_item = {}

        # Cria chave 'title' no dict
        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        # O preço do book está em um elemento da classe "price_color"
        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        # O link está dentro de um atributo 'href'
        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
        books.append(new_item)

    return books
        
firefox.get("https://books.toscrape.com/")

all_books = []
url2request = "https://books.to.scrape.com/"

#Cria uma variável com o seletor que captura o link do botão d passar próxima página
next_page_link = (
    firefox.find_element(By.CLASS_NAME, "next")
    .get_attribute("innerHTML")
)

# Enquanto este botão de 'next' xistir na página irá iterar
while next_page_link:
    # Usa o método extend para colocar todos os elementos de uma lista dentro de outra
    all_books.extend(scrape(url2request))
    try:
        url2request = (
            firefox.find_element(By.CLASS_NAME, "next")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
    except NoSuchElementException:
        print("exception handled")
        break

print(all_books)