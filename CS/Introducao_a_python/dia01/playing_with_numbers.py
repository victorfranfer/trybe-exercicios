
# Exercise 1: Write a function that receives two numbers and returns the biggest one
def get_biggest_number(a, b):
    if a > b:
        print(a)
    elif a < b:
        print(b)
    else:
        print("numbers are equal")

get_biggest_number(5, 5);


# Exercice 2: Calculate the average of values in a list
numbers = [5, 8, 9, 10, 7, 6]

def get_average(list):
    sum = 0
    for number in list:
        sum = sum + number
    print(sum / len(list))

get_average(numbers)



# Exercise 3: Write a script that given a 'n' > 1 value, prints a square made of * of length and width equal to 'n'
def print_asteriscs(number):
    if number > 1:
        for row in range(number):
            print(number * '*')


print_asteriscs(8)


# Exercise 4: Create a function that receives a list of names and returns the name with the most characters
names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def get_longest_name(names):
    longest_name = names[0]
    for name in names:
        if len(name) > len(longest_name):
            longest_name = name
    print(longest_name)

get_longest_name(names)


# Exercise 5: Consider the ink coverage is 1L for each 3m² and the ink is sold in 18L cans, that cost R$80,00 each. Create a funcion
# that returns two values in a tuple containing the amount of cans to be bought and the total price based on the size of a wall.

def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    print(required_cans, required_cans * can_price)

paint_costs(500)