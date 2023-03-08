# Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu conteúdo de forma legível.
import requests

class crawler:
    def get_request(path):
        response = requests.get(path)
        print(response.text)

    get_request(path="https://httpbin.org/encoding/utf8")