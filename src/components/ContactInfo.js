import React from 'react';

export default function ContactInfo({nextStep,prevStep,userData,handleContactInfo}) {
    return (
        <div>
            <h3>Korak 3. Vaši kontakt podaci</h3>
            <form className='contact'>
                <div>
                    <input type='text' name='name' value={userData.name} onChange={handleContactInfo} placeholder='Ime i prezime*'/>
                    <input type='email' name='email' value={userData.email} onChange={handleContactInfo} placeholder='Email adresa*'/>
                </div>
                <div>
                    <input type='tel' name='phone' value={userData.phone} onChange={handleContactInfo} placeholder='Broj telefona*'/>
                    <textarea id='last' type='text' name='note' value={userData.note} onChange={handleContactInfo} placeholder='Napomena (opcionalno)'/>
                </div>
            </form>
            <hr></hr>
            <div className='buttons'>
                <button type="button" onClick={prevStep}>NAZAD</button>
                <button type="button" disabled={userData.name && userData.email && userData.phone ? false: true} onClick={nextStep}>DALJE</button>
            </div>
        </div>
    )
}
