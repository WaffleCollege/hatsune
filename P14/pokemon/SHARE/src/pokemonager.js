const allPokemon = window.allPokemon;

window.pokemonager = {
  findNames: () => {
    // 1問目のコードをここに書きましょう
    return pokemon.map(p => p.Name);
  },

  findByResistance: (attack) => {
    // 2問目のコードをここに書きましょう
    return pokemon.filter(p => p.Resistant.includes(attack));
  },

  findNamesByResistance: (attack) => {
    // 3問目のコードをここに書きましょう
    return pokemon.filter(p => p.Resistant.includes(attack)).map(p => p.Name);
  },

  avgMaxCP: () => {
    // 4問目のコードをここに書きましょう
    const pokemonWithCP = pokemon.filter(p => p.MaxCP !== undefined);
    const totalCP = pokemonWithCP.reduce((acc, p) => acc + p.MaxCP, 0);
    return totalCP / pokemonWithCP.length;
  },

  countedWeaknesses: () => {
    // 5問目のコードをここに書きましょう
    const weaknessesCount = {};
    pokemon.forEach(p => {
      p.Weaknesses.forEach(w => {
        if (weaknessesCount[w]) {
          weaknessesCount[w]++;
        } else {
          weaknessesCount[w] = 1;
        }
      });
    });
    return weaknessesCount;
  },
  };

