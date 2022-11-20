export interface ImageCardProps {
    imageUrl: string;
}

export default function ImageCard({ imageUrl }: ImageCardProps) {
    return (
        <>
            <div className="root">
                <img src={imageUrl} alt="" />
            </div>
            <style>
                {`
                    .root {
                        display: flex;
                        justify-content: center;
                        padding: 0.15rem;
                        background-color: white;
                        border-radius: 0.5rem;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                            0 2px 4px -2px rgba(0, 0, 0, 0.1);
                        min-width: 600px;
                    }
                    .root img {
                        width: 100%;
                        transition: all 0.3s;
                    }
                `}
            </style>
        </>
    );
}
