import { useState } from "react"


function Quotetime() {
    
    const [opt, setOpt] = useState('today')
    

    function generateOption(array) {
        const d = new Date()
        let Hour = d.getHours()
        let Minute = d.getMinutes() 

        if (Minute < 15){
            Minute = 45
        }
        else if (Minute >= 15 && Minute < 30 ){
            Hour += 1
            Minute = 0
        }
        else if (Minute >= 30 && Minute < 45){
            Hour += 1
            Minute = 15
        }
        else if (Minute >= 45 && Minute < 59){
            Hour += 1
            Minute = 30
        }

        const from = (Hour < 9 ? 9 : Hour )*60 + Minute

        var hours, minutes;
        for(var i = from; i <= 1230; i += 15){
            hours = Math.floor(i / 60);
            minutes = i % 60;
            if (minutes < 10){
                minutes = '0' + minutes; // adding leading zero
            }
            array.push(hours + ':' + minutes ); 
        }
    }

    let select = [];
    generateOption(select)

    const optChange = () =>{
        setOpt(document.querySelector('#time_select').value)
      }

    
    return <div className="quotetime">
        <div className="quotetime__heading">Chọn thời gian nhận hàng: </div>
        <div className="quotetime__content">
            <div className='quotetime__content-wrap'>
                <div className='method-label' >Ngày: </div>
                <select className='selection__add' id="time_select" onClick={() => optChange()} >
                    <option value='today' >Hôm nay</option>
                    <option value='soon' >Càng sớm càng tốt</option>
                </select>
            </div>
            <div className='quotetime__content-wrap'>
                <div className='method-label' >Giờ: </div>
                <select className='selection__add' >
                    {opt === 'today' ? (select.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })) : <option value='none'>None</option> }
                    
                </select>
            </div>
        </div>
        
    </div>
}

export default Quotetime;