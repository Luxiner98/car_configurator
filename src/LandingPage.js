import React, { useState } from 'react'
import Modal from 'react-modal';
import ManageData from './data/ManageData';

export default function LandingPage() {
    Modal.setAppElement('#root');
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <p>Pritisnite gumb niže kako biste pokrenuli konfigurator.</p>
            <button onClick={()=>setOpenModal(true)}>Pokreni konfigurator</button>
            <Modal 
                isOpen={openModal} 
                onRequestClose={()=>setOpenModal(false)} 
                className="myModal">
                <span className="close" onClick={()=>setOpenModal(false)}>&times;</span>
                <h2>Konfigurator servisa</h2>
                <ManageData />
            </Modal>
        </div>
    )
}
