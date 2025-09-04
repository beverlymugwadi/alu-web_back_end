#!/usr/bin/env python3
"""Type-annotated function safely_get_value using TypeVar"""


from typing import Mapping, Any, TypeVar, Union


T = TypeVar('T')  # Generic type for default value


def safely_get_value(
    dct: Mapping,
    key: Any,
    default: Union[T, None] = None
) -> Union[Any, T]:
    """Return the value for key if it exists, otherwise return default"""
    if key in dct:
        return dct[key]
    return default
