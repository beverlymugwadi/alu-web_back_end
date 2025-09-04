#!/usr/bin/env python3
"""Type-annotated function to_kv"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with a string and the square of int/float as a float"""
    return (k, float(v ** 2))
