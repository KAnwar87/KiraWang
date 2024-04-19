import './GayaKiraWang.css'
import { useState } from 'react';

function KiraWang() {

    const [rm100qty, setRM100qty] = useState(0);
    const [subRM100, setSubRM100] = useState(0);
    const handleRM100qtyChange = (e) => {
        setRM100qty(e.target.value);
        setSubRM100(e.target.value * 100)
    };
    const handleRM100minusButton = () => {
        if (rm100qty > 0) {
            setRM100qty(prevQty => parseInt(prevQty) - 1);
            setSubRM100(prevQty => parseInt(prevQty) - 100)
        }
    };
    const handleRM100plusButton = () => {
        setRM100qty(prevQty => parseInt(prevQty) + 1);
        setSubRM100(prevQty => parseInt(prevQty) + 100)
    };


    return (
        <>
            <div className='title'>
                <h2>Kalkuleter</h2>
            </div>
            <div className='container'>
                <div className='row satuRatus align-items-center'>
                    <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleRM100minusButton}>-</button></div>
                    <div className='col duit'><span>RM 100</span></div>
                    <div className='col darabInput'><span>X </span><input type='number' className="ringgitSen text-center" id="rm100qty" min="0" value={rm100qty} onChange={handleRM100qtyChange} text-align="center"></input></div>
                    <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleRM100plusButton}>+</button></div>
                    <div className='col subAmount'><strong><span>RM </span>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subRM100)}</strong></div>
                </div>
                <div className='row satuRatus align-items-center'>
                    <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleRM100minusButton}>-</button></div>
                    <div className='col duit'><span>RM 100</span></div>
                    <div className='col darabInput'>
                        <div className="input-group mb-3 flex-nowrap">
                            <span className="input-group-text flex-nowrap" id="darab100">X</span>
                            <input type="number" className="ringgitSen form-control flex-nowrap" id="rm100qty" min="0" value={rm100qty} onChange={handleRM100qtyChange} text-align="center"></input>
                        </div>
                    </div>
                    <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleRM100plusButton}>+</button></div>
                    <div className='col subAmount'><strong><span>RM </span>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subRM100)}</strong></div>
                </div>
            </div>
            
        </>
    )
}

export default KiraWang

