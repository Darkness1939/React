import './Butcomponent.css'
const Button = ({ onClick, children }) => (
    <button onClick={onClick} className='myGyat'>{children}</button>
);
export default Button;
