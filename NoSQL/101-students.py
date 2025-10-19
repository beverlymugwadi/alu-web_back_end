#!/usr/bin/env python3
"""Module that returns all students sorted by average score."""
from pymongo import MongoClient


def top_students(mongo_collection):
    """
    Returns all students sorted by average score.
    
    Each document in the result includes a new field:
    - averageScore: the average of all topic scores
    """
    return list(mongo_collection.aggregate([
        {
            "$project": {
                "name": 1,
                "topics": 1,
                "averageScore": {"$avg": "$topics.score"}
            }
        },
        {
            "$sort": {"averageScore": -1}
        }
    ]))
