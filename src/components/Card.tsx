interface CardProps {
    title: string;
    description?: string;
    pricing?: number;
    image: {
        src: string;
        alt?: string;
    };
    cta?: string;
    onClick?: () => void;
}

export default function Card({ title, description, pricing, image, cta, onClick }: CardProps) {
    return (
        <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden w-full" onClick={onClick}>
            <div className="p-4 flex-1">
                <p className="text-sm text-gray-500 mb-1 font-bold">{cta}</p>
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                {description && <p className="text-sm text-gray-700 mt-1">{description}</p>}
                {pricing !== undefined && (
                    <div className="mt-4">
                        <span className="inline-block bg-gray-100 px-4 py-2 rounded-full font-semibold text-gray-800">
                            ${pricing.toFixed(2)}
                        </span>
                    </div>
                )}
            </div>

            <picture className="w-32 h-32 flex-shrink-0 p-2">
                <img
                    src={image.src}
                    alt={image.alt || title}
                    width={0}
                    height={0}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </picture>
        </div>
    );
}
  