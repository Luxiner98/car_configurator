import React from 'react';

export default function FinalOverview({nextStep,prevStep,goToStep,radio,service,success,checkedOption,userData}) {
    return (
        <div>
            <h3>Korak 4. Pregled i potvrda vašeg odabira</h3>
            <p>
                Molimo vas još jednom da pregledate i potvrdite unesene podatke. Ukoliko želite promjeniti neki od podataka,
                možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost
                svojih podataka pritisnite gum pošalji na dnu za slanje upita za servis.
            </p>
            <div className='section'>
                <div className='model'>
                    <h4>MODEL VOZILA <button onClick={()=>goToStep(1)}>Uredi</button></h4>
                    <p>{radio.car}</p>
                </div>
                <div className='selected-services'>
                    <h4>ODABRANE USLUGE <button onClick={()=>goToStep(2)}>Uredi</button></h4>
                    <div>
                        <div className='spans'>
                            <div className='span-service'>
                                {service.checked.map((el,index)=><span key={index}>{el}</span>)}
                            </div>
                            <div className='span-price'>
                                {checkedOption.map((el,index)=><span key={index}>{el}</span>)}
                            </div>
                        </div>
                    </div>
                    <p>
                        {success.includes('Hvala') && <span>Popust (30%): -{service.price*0.3}  KN</span>}
                        <br></br>
                        UKUPNO: {!success.includes('Hvala')? service.price:service.price-service.price*0.3} KN
                    </p>
                </div>
            </div>
            <hr></hr>
            <div>
                <h4>KONTAKT PODACI <button onClick={()=>goToStep(3)}>Uredi</button></h4>
                <div className='info'>
                    <p>Ime i prezime: {userData.name}</p>
                    <p>Email adresa: {userData.email}</p>
                    <p>Broj telefona: {userData.phone}</p>
                    <p>Napomena: {userData.note}</p>
                </div>
            </div>
            <hr></hr>
            <div className='buttons'>
                <button type="button" onClick={prevStep}>NAZAD</button>
                <button type="button" onClick={nextStep}>POŠALJI</button>
            </div>
        </div>
    )
}
