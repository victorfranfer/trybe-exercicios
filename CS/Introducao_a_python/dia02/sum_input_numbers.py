numbers_input = input("Digite uma sequência de números separados por espaço: ")

numbers = numbers_input.split(" ")

sum = 0

for number in numbers:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} não é um dígito.")
    else:
        sum += int(number)

print(f"A soma dos valores válidos é: {sum}")

