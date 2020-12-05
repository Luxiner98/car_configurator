import React from 'react';
import carsJson from '../cars&services/cars.json';

export default function CarManufacturer({radio,handleRadioChange,nextStep}) {

    return (
        <div>
            <h3>Korak 1. Odaberite proizvođača vašeg vozila</h3>
            <div className='cars'>
                {carsJson.cars.map(el=>(
                    <label key={el.id}>
                        <input
                            type="radio" 
                            value={el.manufacturer}
                            name="cars"
                            checked={el.manufacturer === radio.car}                           
                            onChange={handleRadioChange}  
                        />
                        {el.manufacturer}
                    </label>
                ))}
                <hr></hr>
                <button type="button" disabled={radio.car ? false:true} onClick={nextStep}>DALJE</button>
            </div>
        </div>
    )
}
