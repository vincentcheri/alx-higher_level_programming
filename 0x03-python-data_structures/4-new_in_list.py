#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    temp = my_list[:]
    if idx >= 0 and idx < len(temp):
        temp[idx] = element
    return temp
