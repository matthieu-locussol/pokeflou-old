import { useState } from "react";
import { Card } from "./Card";
import "./Quizz.css";

interface QuizzProps {
    sprites: Record<number, string>;
}

export default function Quizz({ sprites }: QuizzProps) {
    const [count, setCount] = useState(1);
    const increment = () => setCount(() => (count < 4 ? count + 1 : 7));

    return (
        <div>
            <Card imageUrl={`data:image/png;base64,${sprites[count]}`} />
            <input type="text" />
            <div className="buttons">
                <button className="primary">Soumettre</button>
                <button className="secondary" onClick={increment}>
                    Je ne sais pas
                </button>
            </div>
        </div>
    );
}
