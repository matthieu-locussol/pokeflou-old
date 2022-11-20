export const decodePokemonName = (hash: string) =>
    decodeURIComponent(atob(atob(atob(hash))));
