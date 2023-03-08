from pymongo import MongoClient


class booksByCategory:
    def get_books_by_category():
        with MongoClient() as client:
            db = client.library
            pipelines = [
                {"$match": {"status": "PUBLISH"}},
                {"$unwind": "$categories"},
                {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
                {"$sort": {"count": -1}}
            ]
            for category in db.books.aggregate(pipelines):
                print(category["_id"], category["count"], sep=": ")
    
    get_books_by_category()