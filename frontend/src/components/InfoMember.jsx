import PropTypes from 'prop-types';
import styles from "@styles/modal.module.css"
import { useEffect, useState } from 'react';

const InfoMember = ({ onClose, selected }) => {
    const [userInfo, setUserinfo] = useState({});

    useEffect(() => {
        setUserinfo(selected);
    }, [selected])

    const closeModal = () => {
        onClose();
    }
    return (
        <div className={styles.overlay}>
            <div className={`${styles.modal} d-flex justify-content-between`} >
                <div>
                    <p>{`Nombre y Apellido: ${userInfo.nombre} ${userInfo.apellido}`} </p>
                    <p> DNI: {`  ${userInfo.dni}`} </p>
                    <p>Fecha de Nacimiento: {`  ${userInfo.fechaDeNacimiento}`} </p>
                    <p>E-mail: {`  ${userInfo.direccion}`} </p>
                    <p>Telefono:{`  ${userInfo.telefono}`} </p>
                    <p>Telefono de Emergencia:{`  ${userInfo.telefonoAuxiliar}`} </p>
                    <p> Apto Fisico{`  ${userInfo.aptoFisico}`} </p>
                    <p>Membresia: {`  ${userInfo.membresia}`} </p>
                    <p>Vencimiento: {`  ${userInfo.expiracion}`} </p>
                    <p>Estado: {`  ${userInfo.estado}`} </p>
                </div>
                <button
                    onClick={closeModal}
                    className='d-flex align-items-start p-0'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
InfoMember.propTypes = {
    onClose: PropTypes.func.isRequired,
    selected: PropTypes.func.isRequired
};

export default InfoMember
