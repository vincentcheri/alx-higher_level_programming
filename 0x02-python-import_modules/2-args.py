#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    num = len(sys.argv) - 1
if num == 0:
    print("{:d} {:s}{:s}".format(num, "arguments", "."))
elif num == 1:
    print("{:d} {:s}{:s}".format(num, "argument", ":"))
else:
    print("{:d} arguments:".format(num))
for i in range(num):
    print("{:d}: {:s}".format(i + 1, sys.argv[i + 1]))
