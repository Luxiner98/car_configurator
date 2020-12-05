import React from 'react';
import servicesJson from '../cars&services/services.json';


export default function ChosingService({nextStep,prevStep,service,handleCheckboxChange,openCupon,openInput,textCupon,checkCupon,success}) {

    return (
        <div>
            <h3>Korak 2. Odaberite jednu ili više usluga za koje ste</h3>
            <div className='services'>
                {servicesJson.services.map(el=>(
                    <label key={el.id}>
                        <input
                            type="checkbox" 
                            value={el.price}
                            name={el.service}
                            checked={service.checked.includes(el.service)}
                            onChange={(e)=>handleCheckboxChange(e)}  
                        />
                        {el.service} ({el.price} kn)
                    </label>
                ))}
                <div>
                    {!openCupon && <span onClick={openInput}>Imam kupon</span>}
                    <span className={success.includes('Hvala') ? 'green':'red'}>{success}</span>
                    {success.includes('Hvala') &&
                        <div>
                            <p>OSNOVICA: {service.price} KN</p>
                            <p>Popust (30%): -{service.price*0.3} KN</p>
                        </div>
                    }
                    {openCupon && !success.includes('Hvala') &&
                        <form onSubmit={checkCupon}>
                            <input type="text" name='secret' onChange={textCupon} placeholder=''/>
                            <button type='submit'>Primjeni</button>
                        </form>
                    }
                    <p className='price'>
                        UKUPNO: <strong>{!success.includes('Hvala') ? service.price:service.price-service.price*0.3} KN</strong>
                    </p>
                </div>
                <hr></hr>
                <div className='buttons'>
                    <button type="button" onClick={prevStep}>NAZAD</button>
                    <button type="button" disabled={!service.price} onClick={nextStep}>DALJE</button>
                </div>
            </div>
        </div>
    )
}
