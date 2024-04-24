import './GayaKiraWang.css'
import { useState } from 'react';

const Footer = () => {

    const [showModal, setShowModal] = useState(false);

        const handleCloseModal = () => {
            setShowModal(false);
        };

        const handleShowModal = () => {
            setShowModal(true);
        };
    
    const year = new Date().getFullYear();

    

    return <footer>
        <span>{`© ${year}`} Khairul Anwar</span> &nbsp;
        <button type="button" className="btn btn-dark btn-sm" onClick={handleShowModal}>
            <i className="fa-solid fa-info fa-xs"></i>
        </button>  &nbsp;
        <span className='credit'><a href="https://lovepik.com/images/png-malaysia.html" target='_blank'><em>Illustration by HappySnow on LovePik</em></a></span>


        {/* Modal */}
            {showModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Kira Wang by Khairul Anwar</h5>
                            </div>
                            <div className="modal-body">
                                <span>
                                    Hai!<br /> 
                                    Terima kasih kerana menggunakan calculator Kira Wang ini.<br /><br />
                                    Calculator ini saya bina semula menggunakan React berdasarkan hasil dari web https://kiraduitraya.com sebagai rujukan,<br />dan saya tambahkan fungsi baru seperti input manual untuk kuantiti, amaun bagi setiap denominasi wang serta simpan rekod hasil kiraan.<br /><br />

                                    Ini adalah sebahagian daripada projek personal saya dalam percubaan untuk memahirkan diri dalam web programming setelah selesai menjalani MERN Bootcamp pada 2023 anjuran KelasProgramming.com.<br /><br />

                                    Tech used in this project:<br /> 
                                    <i className="fa-brands fa-react"></i> <span className="badge rounded-pill bg-dark ">React</span>
                                    <i className="fa-brands fa-bootstrap"></i> <span className="badge rounded-pill bg-dark ">Bootstrap</span> &nbsp;<br />
                                    <i className="fa-brands fa-html5"></i> <span className="badge rounded-pill bg-dark ">HTML</span> &nbsp;
                                    <i className="fa-brands fa-css3-alt"></i> <span className="badge rounded-pill bg-dark ">CSS</span> &nbsp;
                                    <i className="fa-brands fa-js"></i> <span className="badge rounded-pill bg-dark ">Javascript</span> &nbsp;
                                    <br /><br />
                                    Hubungi saya:<br />
                                    <a href="https://github.com/KAnwar87" target="_blank"><i className="fa-brands fa-github fa-lg"></i> Khairul Anwar - 0194001148</a> 
                                </span>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        {/* End of Modal */}
    </footer>;

        
};

export default Footer;