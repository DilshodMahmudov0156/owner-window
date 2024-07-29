import React from 'react';
import pitsa from "../pitsa.png";

function SettingsPage() {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-end">
                <button className="add-btn">+ Yangi qo'shish</button>
            </div>
            <div className="row justify-content-center add-window mt-4">
                <div className="col-lg-4">
                    <div className="card">
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
                            <div className="text-end">
                                <button className="submit-btn">Mahsulotni Joylash</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="my-card shadow">
                            <img src={pitsa} alt="" className="card-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;