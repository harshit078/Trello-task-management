import Image from "next/image";

interface LightButtonProps {
    text: string;
    onClick: () => void;
    icon?: string| JSX.Element;
    alt?: string;
}

export const LightButton: React.FC<LightButtonProps> = ({ text, onClick, icon, alt }) => {
    return (
        <button onClick={onClick} className=" hover:bg-gray-200 rounded-lg flex gap-3 items-center bg-[#f4f4f4] p-2 text-[#797979]">
            <span>{text}</span>
            {typeof icon === 'string' ? 
                <Image
                    src={icon}
                    alt={alt || "Icon"}
                    height={20}
                    width={20}
                />
                : icon
            }
        </button>
    );
};