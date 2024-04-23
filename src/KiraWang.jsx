import './GayaKiraWang.css'
import { useState, useEffect } from 'react';

/* #region Prevent Right Click */

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

document.querySelectorAll('.disabled').forEach(element => {
    element.style.pointerEvents = 'none';
});

/* #endregion */

function KiraWang() {

/* #region Ringgit & Sen */

    // RM100
    const [rm100qty, setRM100qty] = useState(0);
    const [subRM100, setSubRM100] = useState(0);
    const handleRM100qtyChange = (e) => {
        setRM100qty(e.target.value);
        setSubRM100(e.target.value * 100);
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

        // RM50
        const [rm50qty, setRM50qty] = useState(0);
        const [subRM50, setSubRM50] = useState(0);
        const handleRM50qtyChange = (e) => {
            setRM50qty(e.target.value);
            setSubRM50(e.target.value * 50)
        };
        const handleRM50minusButton = () => {
            if (rm50qty > 0) {
                setRM50qty(prevQty => parseInt(prevQty) - 1);
                setSubRM50(prevQty => parseInt(prevQty) - 50)
            }
        };
        const handleRM50plusButton = () => {
            setRM50qty(prevQty => parseInt(prevQty) + 1);
            setSubRM50(prevQty => parseInt(prevQty) + 50)
        };

            // RM20
            const [rm20qty, setRM20qty] = useState(0);
            const [subRM20, setSubRM20] = useState(0);
            const handleRM20qtyChange = (e) => {
                setRM20qty(e.target.value);
                setSubRM20(e.target.value * 20)
            };
            const handleRM20minusButton = () => {
                if (rm20qty > 0) {
                    setRM20qty(prevQty => parseInt(prevQty) - 1);
                    setSubRM20(prevQty => parseInt(prevQty) - 20)
                }
            };
            const handleRM20plusButton = () => {
                setRM20qty(prevQty => parseInt(prevQty) + 1);
                setSubRM20(prevQty => parseInt(prevQty) + 20)
                };
        
    // RM10
    const [rm10qty, setRM10qty] = useState(0);
    const [subRM10, setSubRM10] = useState(0);
    const handleRM10qtyChange = (e) => {
        setRM10qty(e.target.value);
        setSubRM10(e.target.value * 10)
    };
    const handleRM10minusButton = () => {
        if (rm10qty > 0) {
            setRM10qty(prevQty => parseInt(prevQty) - 1);
            setSubRM10(prevQty => parseInt(prevQty) - 10)
        }
    };
    const handleRM10plusButton = () => {
        setRM10qty(prevQty => parseInt(prevQty) + 1);
        setSubRM10(prevQty => parseInt(prevQty) + 10)
    };

        // RM5
        const [rm5qty, setRM5qty] = useState(0);
        const [subRM5, setSubRM5] = useState(0);
        const handleRM5qtyChange = (e) => {
            setRM5qty(e.target.value);
            setSubRM5(e.target.value * 5)
        };
        const handleRM5minusButton = () => {
            if (rm5qty > 0) {
                setRM5qty(prevQty => parseInt(prevQty) - 1);
                setSubRM5(prevQty => parseInt(prevQty) - 5)
            }
        };
        const handleRM5plusButton = () => {
            setRM5qty(prevQty => parseInt(prevQty) + 1);
            setSubRM5(prevQty => parseInt(prevQty) + 5)
        };

            // RM1
            const [rm1qty, setRM1qty] = useState(0);
            const [subRM1, setSubRM1] = useState(0);
            const handleRM1qtyChange = (e) => {
                setRM1qty(e.target.value);
                setSubRM1(e.target.value * 1)
            };
            const handleRM1minusButton = () => {
                if (rm1qty > 0) {
                    setRM1qty(prevQty => parseInt(prevQty) - 1);
                    setSubRM1(prevQty => parseInt(prevQty) - 1)
                }
            };
            const handleRM1plusButton = () => {
                setRM1qty(prevQty => parseInt(prevQty) + 1);
                setSubRM1(prevQty => parseInt(prevQty) + 1)
                };

    // 50sen
    const [sen50qty, setSen50qty] = useState(0);
    const [subSen50, setSubSen50] = useState(0);
    const handleSen50qtyChange = (e) => {
        setSen50qty(e.target.value);
        setSubSen50(e.target.value * 0.50)
    };
    const handleSen50minusButton = () => {
        if (sen50qty > 0.00) {
            setSen50qty(prevQty => parseFloat(prevQty) - 1);
            setSubSen50(prevQty => parseFloat(prevQty) - 0.50)
        }
    };
    const handleSen50plusButton = () => {
        setSen50qty(prevQty => parseFloat(prevQty) + 1);
        setSubSen50(prevQty => parseFloat(prevQty) + 0.50)
    };

        // 20sen
        const [sen20qty, setSen20qty] = useState(0);
        const [subSen20, setSubSen20] = useState(0);
        const handleSen20qtyChange = (e) => {
            setSen20qty(e.target.value);
            setSubSen20(e.target.value * 0.20)
        };
        const handleSen20minusButton = () => {
            if (sen20qty > 0) {
                setSen20qty(prevQty => parseFloat(prevQty) - 1);
                setSubSen20(prevQty => parseFloat(prevQty) - 0.20)
            }
        };
        const handleSen20plusButton = () => {
            setSen20qty(prevQty => parseFloat(prevQty) + 1);
            setSubSen20(prevQty => parseFloat(prevQty) + 0.20)
        };

    // 10sen
    const [sen10qty, setSen10qty] = useState(0);
    const [subSen10, setSubSen10] = useState(0);
    const handleSen10qtyChange = (e) => {
        setSen10qty(e.target.value);
        setSubSen10(e.target.value * 0.10)
    };
    const handleSen10minusButton = () => {
        if (sen10qty > 0.00) {
            setSen10qty(prevQty => parseFloat(prevQty) - 1);
            setSubSen10(prevQty => parseFloat(prevQty) - 0.10)
        }
    };
    const handleSen10plusButton = () => {
        setSen10qty(prevQty => parseFloat(prevQty) + 1);
        setSubSen10(prevQty => parseFloat(prevQty) + 0.10)
    };

        // 5sen
        const [sen5qty, setSen5qty] = useState(0);
        const [subSen5, setSubSen5] = useState(0);
        const handleSen5qtyChange = (e) => {
            setSen5qty(e.target.value);
            setSubSen5(e.target.value * 0.05)
        };
        const handleSen5minusButton = () => {
            if (sen5qty > 0) {
                setSen5qty(prevQty => parseFloat(prevQty) - 1);
                setSubSen5(prevQty => parseFloat(prevQty) - 0.05)
            }
        };
        const handleSen5plusButton = () => {
            setSen5qty(prevQty => parseFloat(prevQty) + 1);
            setSubSen5(prevQty => parseFloat(prevQty) + 0.05)
        };

    const [total, setTotal] = useState(0);

useEffect(() => {
    const calculatedTotal = subRM100 + subRM50 + subRM20 + subRM10 + subRM5 + subRM1 + subSen50 + subSen20 + subSen10 + subSen5;
    setTotal(calculatedTotal.toFixed(2));
}, [subRM100, subRM50, subRM20, subRM10, subRM5, subRM1, subSen50, subSen20, subSen10, subSen5]);


    
/* #endregion */
/* #region RM vs RM&Sen & Reset */

    const [showDuitSyiling, setShowDuitSyiling] = useState(false);

    const handleReset = () => {
        setRM100qty(0);
            setSubRM100(0);
        setRM50qty(0);
            setSubRM50(0);
        setRM20qty(0);
            setSubRM20(0);
        setRM10qty(0);
            setSubRM10(0);
        setRM5qty(0);
            setSubRM5(0);
        setRM1qty(0);
            setSubRM1(0);
        setSen50qty(0);
            setSubSen50(0);
        setSen20qty(0);
            setSubSen20(0);
        setSen10qty(0);
            setSubSen10(0);
        setSen5qty(0);
            setSubSen5(0);

        setTotal(0);
    };


/* #endregion */
/* #region Modal : Save, Remark & Save Button */

    // Modal : Save
        const [showModalSave, setShowModalSave] = useState(false);

            const handleCloseModalSave = () => {
                setShowModalSave(false);
            };

            const handleShowModalSave = () => {
                setShowModalSave(true);
            };

        // Modal : Save - Remark
        const [saveRemark, setSaveRemark] = useState('');
            const handleSaveRemarkChange = (e) => {
                setSaveRemark(e.target.value);
            };
        
            // Modal : Save - Records

            const handleSaveRecord = () => {
                const id = new Date(); 
                const date = new Date().toLocaleDateString('en-GB');
            
                const items = [
                    { currency: 'RM100', qty: rm100qty, subtotal: subRM100 },
                    { currency: 'RM50', qty: rm50qty, subtotal: subRM50 },
                    { currency: 'RM20', qty: rm20qty, subtotal: subRM20 },
                    { currency: 'RM10', qty: rm10qty, subtotal: subRM10 },
                    { currency: 'RM5', qty: rm5qty, subtotal: subRM5 },
                    { currency: 'RM1', qty: rm1qty, subtotal: subRM1 },
                    { currency: '50sen', qty: sen50qty, subtotal: subSen50 },
                    { currency: '20sen', qty: sen20qty, subtotal: subSen20 },
                    { currency: '10sen', qty: sen10qty, subtotal: subSen10 },
                    { currency: '5sen', qty: sen5qty, subtotal: subSen5 },
                ];
            
                const filteredItems = items.filter(item => item.qty !== 0);
            
                const newRecord = {
                    id: id,
                    date: date,
                    remark: saveRemark,
                    total: total,
                    filteredItems: filteredItems
                };

                // Get existing records from localStorage
                const existingRecords = JSON.parse(localStorage.getItem('kiraWang')) || [];
            
                // Decide whether to replace or add to existing records based on requirements
                // If you want to replace existing records with the filtered ones:
                // const updatedRecords = filteredRekod;
            
                // If you want to add the new filtered records to existing records:
                const updatedRecords = [...existingRecords, newRecord];
            
                // Save the updated records to localStorage
                localStorage.setItem('kiraWang', JSON.stringify(updatedRecords));
            };

/* #endregion */
/* #region Modal : View Data */

    // Modal : View Data
    const [showModalViewData, setShowModalViewData] = useState(false);
    const [lsData, setLSData] = useState([]);

    const handleCloseModalViewData = () => {
        setShowModalViewData(false);
    };

    const getDataFromLocalStorage = () => {
        const existingRecords = JSON.parse(localStorage.getItem('kiraWang')) || [];
        setLSData(existingRecords);
    };

    const handleShowModalViewData = () => {
        getDataFromLocalStorage();
        setShowModalViewData(true);
    };

    useEffect(() => {
        // Call the function to get records from localStorage
        getDataFromLocalStorage();
    }, []); // Empty dependency array to run the effect only once on component mount

        const handleDeleteRecord = (recordId) => {
            // Filter out the record with the given ID
            const existingRecords = JSON.parse(localStorage.getItem('kiraWang')) || [];
            const updatedRecords = existingRecords.filter(record => record.id !== recordId);
        
            // Update the state with the filtered records
            setLSData(updatedRecords);
        
            // Update localStorage with the filtered records
            localStorage.setItem('kiraWang', JSON.stringify(updatedRecords));
        };

        const handleClearAllRecord = () => {
            localStorage.removeItem("kiraWang");
        }
/* #endregion */



    return (
        <>
        
            <div className='titleAndSwitchButton'>
                <div><h2>Kira Wang</h2></div>
                <div className='switchButton'>
                    <i className="fa-solid fa-money-bill-1-wave"></i> &nbsp; 
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={() => { setShowDuitSyiling(!showDuitSyiling); handleReset(); }} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> &nbsp;  
                        <i className="fa-solid fa-circle-dollar-to-slot"></i>
                    </div>
                </div>
            </div>

            <div className='row satuRatusRinggit'>
                <div className='col duit'>
                    <div className="banknote"><img className="gambarDuitKertas" src="./DuitKertasRM100.png" alt="RM50"></img> &nbsp; </div>
                    <div className='denomination'><span>RM 100</span></div>
                </div>
                <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleRM100minusButton}>-</button></div>
                <div className='col darabInput d-flex align-items-center'>
                    <div className="input-group d-flex align-items-center">
                        <span className="input-group-text" id="darab100">X</span>
                        <input type="number" className="ringgitSen form-control text-center" id="rm100qty" min="0" value={rm100qty} onChange={handleRM100qtyChange} text-align="center"></input>
                    </div>
                </div>
                <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleRM100plusButton}>+</button></div>
                <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subRM100)}</strong></div>
            </div>

            <div className='row limaPuluhRinggit'>
                <div className='col duit'>
                    <div className="banknote"><img className="gambarDuitKertas" src="./DuitKertasRM50.png" alt="RM50"></img> &nbsp; </div>
                    <div className='denomination'><span>RM 50</span></div>
                </div>
                <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleRM50minusButton}>-</button></div>
                <div className='col darabInput d-flex align-items-center'>
                    <div className="input-group d-flex align-items-center">
                        <span className="input-group-text" id="darab50">X</span>
                        <input type="number" className="ringgitSen form-control text-center" id="rm50qty" min="0" value={rm50qty} onChange={handleRM50qtyChange} text-align="center"></input>
                    </div>
                </div>
                <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleRM50plusButton}>+</button></div>
                <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subRM50)}</strong></div>
            </div>

            <div className='row duaPuluhRinggit'>
                <div className='col duit'>
                    <div className="banknote"><img className="gambarDuitKertas" src="./DuitKertasRM20.png" alt="RM20"></img> &nbsp; </div>
                    <div className='denomination'><span>RM 20</span></div>
                </div>                    
                <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleRM20minusButton}>-</button></div>
                <div className='col darabInput d-flex align-items-center'>
                    <div className="input-group d-flex align-items-center">
                        <span className="input-group-text" id="darab20">X</span>
                        <input type="number" className="ringgitSen form-control text-center" id="rm20qty" min="0" value={rm20qty} onChange={handleRM20qtyChange} text-align="center"></input>
                    </div>
                </div>
                <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleRM20plusButton}>+</button></div>
                <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subRM20)}</strong></div>
            </div>

            <div className='row sePuluhRinggit'>
                <div className='col duit'>
                    <div className="banknote"><img className="gambarDuitKertas" src="./DuitKertasRM10.png" alt="RM10"></img> &nbsp; </div>
                    <div className='denomination'><span>RM 10</span></div>
                </div>                    
                <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleRM10minusButton}>-</button></div>
                <div className='col darabInput d-flex align-items-center'>
                    <div className="input-group d-flex align-items-center">
                        <span className="input-group-text" id="darab10">X</span>
                        <input type="number" className="ringgitSen form-control text-center" id="rm10qty" min="0" value={rm10qty} onChange={handleRM10qtyChange} text-align="center"></input>
                    </div>
                </div>
                <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleRM10plusButton}>+</button></div>
                <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subRM10)}</strong></div>
            </div>

            <div className='row limaRinggit'>
                <div className='col duit'>
                    <div className="banknote"><img className="gambarDuitKertas" src="./DuitKertasRM5.png" alt="RM5"></img> &nbsp; </div>
                    <div className='denomination'><span>RM 5</span></div>
                </div>                    
                <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleRM5minusButton}>-</button></div>
                <div className='col darabInput d-flex align-items-center'>
                    <div className="input-group d-flex align-items-center">
                        <span className="input-group-text" id="darab5">X</span>
                        <input type="number" className="ringgitSen form-control text-center" id="rm5qty" min="0" value={rm5qty} onChange={handleRM5qtyChange} text-align="center"></input>
                    </div>
                </div>
                <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleRM5plusButton}>+</button></div>
                <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subRM5)}</strong></div>
            </div>

            <div className='row satuRinggit'>
                <div className='col duit'>
                    <div className="banknote"><img className="gambarDuitKertas" src="./DuitKertasRM1.png" alt="RM1"></img> &nbsp; </div>
                    <div className='denomination'><span>RM 1</span></div>
                </div>                    
                <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleRM1minusButton}>-</button></div>
                <div className='col darabInput d-flex align-items-center'>
                    <div className="input-group d-flex align-items-center">
                        <span className="input-group-text" id="darab1">X</span>
                        <input type="number" className="ringgitSen form-control text-center" id="rm1qty" min="0" value={rm1qty} onChange={handleRM1qtyChange} text-align="center"></input>
                    </div>
                </div>
                <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleRM1plusButton}>+</button></div>
                <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subRM1)}</strong></div>
            </div>

            {showDuitSyiling && (
                <div className='row limaPuluhSen'>
                    <div className='col duit'>
                        <div className="banknote"><img className="gambarDuitSyiling" src="./DuitSyiling50sen.png" alt="RM0.50" style={{ height: "30px", width: "auto" }}></img> &nbsp; </div>
                        <div className='denomination'><span>50 sen</span></div>
                    </div> 
                    <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleSen50minusButton}>-</button></div>
                    <div className='col darabInput d-flex align-items-center'>
                        <div className="input-group d-flex align-items-center">
                            <span className="input-group-text" id="darabSen50">X</span>
                            <input type="number" className="ringgitSen form-control text-center" id="sen50qty" min="0" value={sen50qty} onChange={handleSen50qtyChange} text-align="center"></input>
                        </div>
                    </div>
                    <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleSen50plusButton}>+</button></div>
                    <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subSen50)}</strong></div>
                </div>
            )}

            {showDuitSyiling && (
                <div className='row duaPuluhSen'>
                    <div className='col duit'>
                        <div className="banknote"><img className="gambarDuitSyiling" src="./DuitSyiling20sen.png" alt="RM0.20" style={{ height: "28px", width: "auto" }}></img> &nbsp; </div>
                        <div className='denomination'><span>20 sen</span></div>
                    </div> 
                    <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleSen20minusButton}>-</button></div>
                    <div className='col darabInput d-flex align-items-center'>
                        <div className="input-group d-flex align-items-center">
                            <span className="input-group-text" id="darabSen20">X</span>
                            <input type="number" className="ringgitSen form-control text-center" id="sen20qty" min="0" value={sen20qty} onChange={handleSen20qtyChange} text-align="center"></input>
                        </div>
                    </div>
                    <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleSen20plusButton}>+</button></div>
                    <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subSen20)}</strong></div>
                </div>
            )}

            {showDuitSyiling && (
                <div className='row sePuluhSen'>
                    <div className='col duit'>
                        <div className="banknote"><img className="gambarDuitSyiling" src="./DuitSyiling10sen.png" alt="RM0.10" style={{ height: "25px", width: "auto" }}></img> &nbsp; </div>
                        <div className='denomination'><span>10 sen</span></div>
                    </div> 
                    <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleSen10minusButton}>-</button></div>
                    <div className='col darabInput d-flex align-items-center'>
                        <div className="input-group d-flex align-items-center">
                            <span className="input-group-text" id="darabSen10">X</span>
                            <input type="number" className="ringgitSen form-control text-center" id="sen10qty" min="0" value={sen10qty} onChange={handleSen10qtyChange} text-align="center"></input>
                        </div>
                    </div>
                    <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleSen10plusButton}>+</button></div>
                    <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subSen10)}</strong></div>
                </div>
            )}


            {showDuitSyiling && (
                <div className='row limaSen'>
                    <div className='col duit'>
                        <div className="banknote"><img className="gambarDuitSyiling" src="./DuitSyiling5sen.png" alt="RM0.05" style={{ height: "24px", width: "auto" }}></img> &nbsp; </div>
                        <div className='denomination'><span>5 sen</span></div>
                    </div> 
                    <div className='col minus'><button type="button" className="btn btn-outline-danger" onClick={handleSen5minusButton}>-</button></div>
                    <div className='col darabInput d-flex align-items-center'>
                        <div className="input-group d-flex align-items-center">
                            <span className="input-group-text" id="darabSen5">X</span>
                            <input type="number" className="ringgitSen form-control text-center" id="sen5qty" min="0" value={sen5qty} onChange={handleSen5qtyChange} text-align="center"></input>
                        </div>
                    </div>
                    <div className='col plus'><button type="button" className="btn btn-outline-primary" onClick={handleSen5plusButton}>+</button></div>
                    <div className='col subAmount'><strong>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(subSen5)}</strong></div>
                </div>
            )}


            <div className='row total'>
                <span>Jumlah: <br />
                    <h4>
                        <strong>RM {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(total)}
                        </strong>
                    </h4>
                </span>
            </div>

            <div className='bebutang'>
                <button type="button" className="btn btn-outline-secondary btn-sm" onClick={handleReset}>Reset</button>
                <button type="button" className="btn btn-info btn-sm" onClick={handleShowModalViewData}>View Records</button> 
                <button type="button" className="btn btn-primary btn-sm" onClick={handleShowModalSave}>Save</button>  
            </div>

            {showModalSave && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Simpan Rekod</h5>
                            </div>
                            <div className="modal-body">
                            <form className="form-floating">
                                <input type="text" className="form-control" id="floatingInputValue" placeholder="Remark" value={saveRemark} onChange={handleSaveRemarkChange} />
                                <label htmlFor="floatingInputValue">Remark</label>
                            </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModalSave}>Cancel</button>
                                <button type="button" className="btn btn-success" onClick={() => { handleSaveRecord(); handleCloseModalSave(); handleShowModalViewData() }}>Save Record</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModalViewData && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="titleAndClear">
                                    <div className="tacTitle"><h5 className="modal-title">View Records</h5></div>
                                    <div className="tacClear">
                                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => { handleClearAllRecord(); handleShowModalViewData() }}><i className="fa-solid fa-delete-left"></i> Delete All</button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="modal-body">
                                <div className="card-container">
                                    {lsData.length === 0 ? (
                                        <p>No records.</p>
                                    ) : (
                                        lsData.map((record, index) => (
                                            
                                        <div className="card" key={index} style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                                            <div className="card-body">
                                                <div className="dateAndDelete">
                                                    <div className="dndDate"><span>{record.date}</span></div>
                                                    <div className="dndDelete">
                                                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteRecord(record.id)}><i className="deleteButton fa-solid fa-trash-can"></i></button>
                                                    </div>
                                                </div>
                                                
                                                <h5 className="card-title">{record.remark}</h5> 
                                                <h5 className="card-subtitle mb-2 text-body-secondary">Total: {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(record.total)}</h5>
                                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                                <span className="card-text">
                                                    {record.filteredItems.map((item, itemIndex) => (
                                                        <span key={itemIndex}>{item.currency} X {item.qty} : {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.subtotal)}<br /></span>
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModalViewData}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            )}

        </>
    )
}

export default KiraWang

