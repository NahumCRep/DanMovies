import '../../styles/Button/Button.css'

const Button = (props) => {
    return ( 
        <button className='btn'>{props.text}</button>
     );
}
 
export default Button;