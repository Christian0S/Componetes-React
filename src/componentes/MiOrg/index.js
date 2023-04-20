
import "./MiOrg.css"

const MiOrg = (props) => {

    // Estado - hooks
    //useState
    // const [nombreVariable, funcionActualiza] = useState(valor initial)


    //const [mostrar, actializarMostrar] = useState(true)
    //function manejarClick() {
    //actializarMostrar(!mostrar);
    //   console.log("mostrar/ olcutar elemento", mostrar)
    //}

    return <section className="OrgSection">
        <h3 className="title">Mi organization</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg