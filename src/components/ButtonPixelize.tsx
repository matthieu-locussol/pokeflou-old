import { useState } from "react";
import ImageCard from "./ImageCard";

export interface ButtonPixelizeProps {
    sprites: {
        1: string;
        2: string;
        3: string;
        4: string;
        7: string;
    };
}

export default function ButtonPixelize({ sprites }: ButtonPixelizeProps) {
    const [count, setCount] = useState<1 | 2 | 3 | 4 | 7>(1);
    const increment = () =>
        setCount((prevCount): 1 | 2 | 3 | 4 | 7 => {
            if (prevCount < 4) {
                return (prevCount + 1) as 1 | 2 | 3 | 4 | 7;
            }

            if (prevCount === 4) {
                return 7;
            }

            return prevCount;
        });

    return (
        <>
            <ImageCard imageUrl={`data:image/png;base64,${sprites[count]}`} />
            <input type="text" />
            <div className="buttons">
                <button type="button" className="primary">
                    Soumettre
                </button>
                <button
                    type="button"
                    className="secondary"
                    onClick={() => increment()}
                >
                    Je ne sais pas
                </button>
            </div>

            <style>
                {`
                    input {
                        width: 100%;
                        margin-top: 32px;
                        padding: 16px;
                        box-sizing: border-box;
                        border: 2px solid white;
                        border-radius: 8px;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                            0 2px 4px -2px rgba(0, 0, 0, 0.1);
                        outline: none;
                        transition: 0.3s all;
                        text-align: center;
                        font-size: large;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }
                    input:hover {
                        box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.1),
                            0 1px 2px -1px rgba(0, 0, 0, 0.1);
                    }
                    input:hover,
                    input:focus {
                        border: 2px solid #64748b;
                        letter-spacing: 4px;
                    }
                    button {
                        padding: 16px;
                        width: 100%;
                    }
                    .buttons {
                        display: flex;
                        margin-top: 32px;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .buttons button:first-of-type {
                        margin-right: 32px;
                    }
                    button {
                        color: white;
                        border: none;
                        cursor: pointer;
                        border-radius: 0.25rem;
                        transition: all 0.3s;
                        text-transform: uppercase;
                    }
                    button.primary {
                        background-color: rgb(16, 185, 129);
                    }
                    button.primary:hover {
                        background-color: rgba(16, 185, 129, 0.9);
                    }
                    button.primary:active {
                        background-color: rgb(5, 150, 105);
                    }

                    main button.secondary {
                        width: 100%;
                        color: white;
                        border: none;
                        cursor: pointer;
                        border-radius: 0.25rem;
                        transition: all 0.3s;
                        text-transform: uppercase;
                        background-color: rgb(245, 158, 11);
                    }
                    main button.secondary:hover {
                        background-color: rgba(245, 158, 11, 0.9);
                    }
                    main button.secondary:active {
                        background-color: rgb(217, 119, 6);
                    }
                `}
            </style>
        </>
    );
}
