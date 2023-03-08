import requests
import json

class book_crawler:
    def get_request(path):
        response = requests.get(path)
        books = response.json()
        with open("books.json", "w") as file:
            json.dump(books, file)
    
    # def save_json(data):
    #     books =  get_request(path="https://lms-assets.betrybe.com/lms/books.json")
    #     with open("books.json", 'w') as file:
    #         json.dump(books, file)

    get_request(path="https://lms-assets.betrybe.com/lms/books.json")
    # save_json()