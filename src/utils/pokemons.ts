import data from "../../public/data.json";

export const POKEMONS_DATA = data;

export const POKEMONS_COUNT = POKEMONS_DATA.length;

export type Pokemon = typeof POKEMONS_DATA[number];
