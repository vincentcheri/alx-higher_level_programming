#!/usr/bin/python3
"""This script removes a particular character from 'str'. where n is the position of the char"""

def remove_char_at(str, n):
    if n < 0:
        return (str)
    return (str[:n] + str[n+1:])
