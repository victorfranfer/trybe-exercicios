# Faça uma requisição ao recurso usuários da API do Github (https://api.github.com/users), exibindo o username e url de todos os usuários retornados.

# Exemplo de retorno
# mojombo https://api.github.com/users/mojombo
# defunkt https://api.github.com/users/defunkt
# pjhyett https://api.github.com/users/pjhyett
# wycats https://api.github.com/users/wycats
# ...

import requests

class githubUserCrawler:
    def get_github_request(path):
        response = requests.get(path)
        users = response.json()
        for user in users:
            print(f"{user['login']} {user['url']}")
            

    get_github_request("https://api.github.com/users")