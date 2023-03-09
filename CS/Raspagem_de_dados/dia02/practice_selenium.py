# importação do webdriver
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys # importa teclas comuns


# criação de uma instância de navegador Firefox
firefox = webdriver.Firefox()

# requisições para essa instância com método get
response = firefox.get("https://www.google.com.br/")

# pesquisa na instância aberta do navegador pela primeira ocorrência do nome 'q'
search_input = firefox.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
search_input.send_keys("the office")

# pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)