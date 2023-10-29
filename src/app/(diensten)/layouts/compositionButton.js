export const Button = ({ size, color, text, ...props }) => {
    const isSmall = size === 'small';
    return (
        <button 
            className={`
                ${isSmall ? 'py-2 px-4 text-sm' : 'py-4 px-8 text-base'}
                ${color ? `bg-${color}-500` : ''}
            `}
            {...props}
        >
            {text}
        </button>
    );
}

export const PrimaryButton = props => {
    return <Button {...props} color="primary" />
}
