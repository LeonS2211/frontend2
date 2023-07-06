import './style.css'
import { Form } from 'react-bootstrap'
import Button from '../Button/Button.jsx'

const ChipL = ({ nombre, curso, handleCita }) => {
    return (
        <div className="chip">
        <p className="nom">{ nombre }</p>
        <p className="cur">{curso}</p>
        <Form onSubmit={() => handleCita}>
        <Button className="but" variant="light" type="submit"  texto=">"/>
        </Form>
        </div>
    )
}

export default ChipL

