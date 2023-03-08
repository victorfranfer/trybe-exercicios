# Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador.
# Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers e verifique se foi bem sucedida.
import requests

class Crawler:
    def __init__(self, path, headers):
        self.path = path
        self.headers = headers
        response = requests.get(path, headers=headers)
        assert "bot detected" not in response.text
        print(response.text)

if __name__ == "__main__":
    crawler1 = Crawler(path="https://scrapethissite.com/pages/advanced/?gotcha=headers", headers={"User-agent": "Mozilla", "Accept": "text/html"})


# response = requests.get("https://scrapethissite.com/pages/advanced/?gotcha=headers", headers={"User-agent": "Mozilla", "Accept": "text/html"})
# assert "bot detected" not in response.text
# print(response.text)