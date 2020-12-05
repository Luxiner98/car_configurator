import React from 'react'

export default function ApplicationSent() {
    return (
        <div className='finish'>
            <h3>Vaša prijava je uspješno poslana.</h3>
            <p>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u najkraćem mogućem roku. Hvala Vam.</p>
            <button onClick={()=>window.location.reload()}>Zatvori</button>
        </div>
    )
}