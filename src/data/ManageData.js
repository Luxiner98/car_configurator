import React, { useState } from 'react';
import ApplicationSent from '../components/ApplicationSent';
import CarManufacturer from '../components/CarManufacturer';
import ChosingService from '../components/ChosingService';
import ContactInfo from '../components/ContactInfo';
import FinalOverview from '../components/FinalOverview';

export default function ManageData() {

    const [step,setStep] = useState(1);

    const nextStep = () => setStep(step + 1)
    const prevStep = () => setStep(step - 1)
    const goToStep = (component) => setStep(component)

    const [radio, setRadio] = useState({car: ''})

    const handleRadioChange = e => {
        setRadio({...radio, car: e.target.value});
    }

    const [service, setService] = useState({price: 0, checked: []});
    const { price, checked } = service;
    const [checkedOption, setChecked] = useState([]);
    
    const handleCheckboxChange = event => {
       let value = parseInt(event.target.value, 10);
       let tempService = event.target.name;

       if (event.target.type === 'checkbox' && event.target.checked){
            setService(service => ({
               ...service, 
               price: price + parseInt(value), 
               checked: [...checked, tempService]
           }))
           setChecked([...checkedOption, value]);
       } else {
            setService(service => ({
               ...service, 
               price: price - parseInt(value), 
               checked: checked.filter(item => item !== tempService)
           }))
           setChecked(checkedOption.filter(item => item !== value));
       }
    }

    const [openCupon,setOpenCupon] = useState(false);
    const [cupon,setCupon] = useState('');
    const [success,setSucces] = useState('');

    const openInput = () =>setOpenCupon(true);
    const textCupon = (e) =>setCupon(e.target.value);

    const checkCupon = event => {
        event.preventDefault();
        if (cupon === 'Tokić123'){
            setSucces('Hvala vam, unijeli ste ispravan kod kupona');
        } else {
            setSucces('Neispravan kupon');
            setCupon('');
        }
    }
    

    const [userData, setUserData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        note: ''
    })

    const handleContactInfo = event => {
        let value = event.target.value;
        setUserData({
            ...userData,
            [event.target.name]: value
        })
    }

    const carsProps = {radio,handleRadioChange,nextStep};
    const serviceProps = {nextStep,prevStep,service,handleCheckboxChange,openCupon,openInput,textCupon,checkCupon,success};
    const contactProps = {nextStep,prevStep,userData,handleContactInfo};
    const overviewProps = {nextStep,prevStep,goToStep,radio,service,success,checkedOption,userData};

    switch(step) {
        case 1: 
            return <CarManufacturer {...carsProps} />
        case 2: 
            return <ChosingService {...serviceProps} />
        case 3:
            return <ContactInfo {...contactProps} />
        case 4:
            return <FinalOverview {...overviewProps} />
        case 5: 
            return <ApplicationSent />
        default:
            return null;
    }
}
