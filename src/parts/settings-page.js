import React, {useState} from 'react';
import {findByRole} from "@testing-library/react";
import {v4 as uuidv4} from "uuid";

function SettingsPage() {

    const [photo, setPhoto] = useState(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [info, setInfo] = useState("");

    const getPhoto = (e) => {setPhoto(e.target.files[0]);}
    const getTitle = (e) => {setTitle(e.target.value);}
    const getPrice = (e) => {setPrice(e.target.value);}
    const getCommit = (e) => {setInfo(e.target.value);}

    const submitData = (e) => {
        e.preventDefault();
        const objData = {
            id: uuidv4(),
            photo: photo,
            title: title,
            price: price,
            info: info
        }

        console.log(objData);
    }
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-end">
                <button className="add-btn">+ Yangi qo'shish</button>
            </div>
            <div className="row justify-content-evenly add-window mt-4">
                <div className="col-xl-4 col-lg-6 col-md-8">
                    <div className="card py-2">
                        <form action="" className="card-body" onSubmit={(e)=>{submitData(e)}}>
                            <label htmlFor="image" className="my-image-label">
                                {
                                    photo?
                                        <p className="text-success file-text mt-3">{photo.name}</p>
                                        :
                                        <>
                                            <i className="bi bi-image"></i>
                                            <span className="file-text">Rasm joylash</span>
                                        </>
                                }
                            </label>
                            <input
                                type="file"
                                className="d-none"
                                id="image"
                                onChange={(e) => {getPhoto(e)}}
                            />
                            <label htmlFor="name" className="my-label">Nomi:</label>
                            <input
                                type="text"
                                className="my-input"
                                placeholder="Mahsulot nomi"
                                id="name" onChange={(e)=>{getTitle(e)}}
                            />
                            <label htmlFor="commit" className="my-label">Izoh:</label>
                            <input
                                type="text"
                                className="my-input"
                                placeholder="Mahsulot haqida"
                                id='commit' onChange={(e)=>{getCommit(e)}}
                            />
                            <label htmlFor="price" className="my-label">Narxi:</label>
                            <input
                                type="number"
                                className="my-input"
                                placeholder="Mahsulot narxi"
                                id="price"
                                onChange={(e)=>{getPrice(e)}}
                            />
                            <div className="text-center">
                                <button className="submit-btn">
                                    Mahsulotni Joylash
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;