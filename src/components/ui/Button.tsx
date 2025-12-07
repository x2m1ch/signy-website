import '../styles/ui/button.css'
import '../styles/header.css'

const Button = (props: { content: string, type: 'one' | 'two'}) => {
    return (
        <button className={ props.type }>
            {props.content}
        </button>
    )
}

export default Button