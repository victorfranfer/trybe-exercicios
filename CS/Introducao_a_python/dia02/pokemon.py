import json

# leitura de todos os pokemons
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

# Separar somente os tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# Abre o arquivo para escrevermos apenas o pokemons do tipo grama
with open("grass_type_pokemons.json", mode="w") as file:
    json.dump(grass_type_pokemons, file)