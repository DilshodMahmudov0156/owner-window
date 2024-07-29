import React from 'react';
import pitsa from "../pitsa.png";

function SettingsPage() {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-end">
                <button className="add-btn">+ Yangi qo'shish</button>
            </div>
            <div className="row justify-content-evenly add-window mt-4">
                <div className="col-xl-4 col-sm-6">
                    <div className="">
                        <form action="" className="card-body">
                            <label htmlFor="image" className="my-image-label">
                                <i className="bi bi-image"></i>
                                <span className="file-text">Rasm joylash</span>
                            </label>
                            <input type="file" className="d-none" id="image"/>
                            <label htmlFor="name" className="my-label">Nomi:</label>
                            <input type="text" className="my-input" placeholder="Mahsulot nomi" id="name"/>
                            <label htmlFor="commit" className="my-label">Izoh:</label>
                            <input type="text" className="my-input" placeholder="Mahsulot haqida" id='commit'/>
                            <label htmlFor="price" className="my-label">Narxi:</label>
                            <input type="number" className="my-input" placeholder="Mahsulot narxi" id="price"/>
                            <div className="text-center">
                                <button className="submit-btn">
                                    Mahsulotni Joylash
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-xl-4 col-sm-6">
                    <div className="my-card shadow-lg">
                        <img src={pitsa} alt="mahsulot-rasmi" className="card-image"/>
                        <div className="d-flex justify-content-between mt-2">
                            <h4>Title</h4>
                            <h5>
                                <span className="price">25,000</span> sum
                            </h5>
                        </div>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, eligendi!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;