import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"


const Colaborador = (props) => {
    const { nombre, Puesto, foto, equipo, id } = props.datos
    const { colorPrimario, eliminarColaborador } = props

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{ background: colorPrimario }} >
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{Puesto}</h5>
        </div>
    </div>
}

export default Colaborador