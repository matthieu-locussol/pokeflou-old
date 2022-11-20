import "./Card.css";

interface CardProps {
    imageUrl: string;
}

export const Card = ({ imageUrl }: CardProps) => {
    return (
        <div className="root">
            <img src={imageUrl} alt="" />
        </div>
    );
};
