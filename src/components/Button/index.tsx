

interface IProps {
    title: string;
}

export const Button = ({title = ''}: IProps) => {
    return(
        <button>{title}</button>
    )
}