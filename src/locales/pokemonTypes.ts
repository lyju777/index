export const pokemonTypeTranslations = {
  normal: { translation: "노말", color: "#A8A77A" },
  fire: { translation: "불", color: "#FBA54C" },
  water: { translation: "물", color: "#6390F0" },
  electric: { translation: "전기", color: "#F7D02C" },
  grass: { translation: "풀", color: "#7AC74C" },
  ice: { translation: "얼음", color: "#96D9D6" },
  fighting: { translation: "격투", color: "#C22E28" },
  poison: { translation: "독", color: "#A33E9E" },
  ground: { translation: "땅", color: "#E2BF65" },
  flying: { translation: "비행", color: "#A98FF3" },
  psychic: { translation: "에스퍼", color: "#F95587" },
  bug: { translation: "벌레", color: "#A6B91A" },
  rock: { translation: "바위", color: "#B6A136" },
  ghost: { translation: "고스트", color: "#735797" },
  dragon: { translation: "드래곤", color: "#6F35FC" },
  dark: { translation: "악", color: "#705746" },
  steel: { translation: "강철", color: "#B7B7CE" },
  fairy: { translation: "페어리", color: "#D685AD" },
  shadow: { translation: "그림자", color: "#000000" },
};

export function translatePokemonType(type: string): {
  translation: string;
  color: string;
} {
  return (
    pokemonTypeTranslations[type.toLowerCase()] || {
      translation: type,
      color: "#000000",
    }
  );
}
