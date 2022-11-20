import { useState } from "react";
import { decodePokemonName } from "../utils/hash";
import type { Pokemon } from "../utils/pokemons";
import { Card } from "./Card";
import "./Quizz.css";

interface QuizzProps {
    pokemon: Pokemon;
    sprites: Record<number, string>;
}

export default function Quizz({ sprites, pokemon }: QuizzProps) {
    const [count, setCount] = useState(1);
    const [found, setFound] = useState(false);
    const [input, setInput] = useState("");

    const increment = () => {
        const newCount = count < 4 ? count + 1 : 7;
        setCount(newCount);

        if (newCount === 7) {
            setInput(decodePokemonName(pokemon.names.fr));
            setFound(true);
        }
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (
            input.toLocaleLowerCase() ===
            decodePokemonName(pokemon.names.fr).toLocaleLowerCase()
        ) {
            alert("Bravo !");
            setCount(7);
            setFound(true);
        } else {
            alert("Nope, essaye encore");
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Card imageUrl={`data:image/png;base64,${sprites[count]}`} />
            <input
                type="text"
                disabled={found}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="buttons">
                <button type="submit" className="primary" disabled={found}>
                    Soumettre
                </button>
                <button
                    type="button"
                    className="secondary"
                    onClick={increment}
                    disabled={found}
                >
                    Je ne sais pas
                </button>
            </div>
        </form>
    );
}
