import Image from 'next/image';

export const ImgHeadingTextCard = ({ item }) => {   
    const { image, title, text } = item;

    return (
        <div className="flex flex-col">
            <Image
                src={image}
                width={100}
                height={100}
                alt={title}
            />
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    )
}