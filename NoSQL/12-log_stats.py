#!/usr/bin/env python3
"""Provides some stats about Nginx logs stored in MongoDB."""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    # total number of logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # methods to check
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # number of status check documents
    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")
