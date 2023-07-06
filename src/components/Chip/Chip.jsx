
import './style.css'

const Chip = ({ text ,fecha}) => {
    return (
        <div className='chip'>
        <div className='log'>{text.substring(0,1)}</div>
        <span className='nombre'>{ text }</span>
        <br/>
        <span className="fecha">{fecha}</span>
        </div>
    )
}

export default Chip