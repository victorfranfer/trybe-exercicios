PI = 3.14 #PI is a constant

def square(side):
    '''Calculate area of square.''' #docstring
    return side * side


def rectangle(length, width):
    ''''Calculate area of rectangle.''' #docstring
    return length * width


def circle(radius):
    '''Calculate area of circle.''' #docstring
    return PI * radius * radius


print(circle.__doc__) #access docstring for function circle

if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))