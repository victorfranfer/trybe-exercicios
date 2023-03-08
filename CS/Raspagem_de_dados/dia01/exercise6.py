from pymongo import MongoClient


class book_crawler:
    def get_book_by_category():
        category = input("Escolha uma categoria: ")
        with MongoClient() as client:
            db = client.library
            for book in db.books.find({"categories": category}, projection=["title"]):
                print(book["title"])
    
    get_book_by_category()