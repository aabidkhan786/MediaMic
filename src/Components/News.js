import React, { useEffect, useState } from 'react'

export default function News() {

    const [newz, setNewz] = useState([]);

    const getNews = async () => {
        const response = await fetch("https://api.github.com/user");
        setNewz(await response.json());
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <>
            <div className="container my-3">
                {
                    newz.map((newget) => {
                        return (
                            <div className="row my-3 mx-3 d-inline-flex justify-content-center">
                                <div className="col-md-3 my-2" key={newget.id}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={newget.html_url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{newget.login}</h5>
                                            <p className="card-text">{newget.login}</p>
                                            {/* <a href="/" className="btn btn-sm btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
