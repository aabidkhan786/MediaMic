import React, { useState, useEffect } from 'react'

export default function News(props) {

    const [headline, setHeadline] = useState([]);

    const getCategory = props.category;

    const getUsers = (Category) => {
        fetch(`https://newsapi.org/v2/top-headlines?category=${getCategory}&country=in&apiKey=8fc5d29e9f8147968ccc87304f7669a0`)
            .then(response => response.json())
            .then(data => setHeadline(data.articles))
    }
    useEffect(() => {
        getUsers();
    })

    return (
        <>
            <div className="container my-3 container-responsive">
                {headline.map((newget) => {
                    return (
                        <div className="container mt-3 shadow-container col-9 padding-0 bg-white border-post" key={newget.url}>
                            <p className='title-font'>" {newget.title} "</p>
                            <div className='d-flex justify-content-start mb-2'>
                                <div className='w-50 col-3 ml-0 image-center'><img src={newget.urlToImage} alt={newget.author} className="img-fluid border image-border" /></div>
                                <div className='mt-1 col-6 padding-content'>
                                    <div className="form-group mt-1">
                                        <p>{newget.description}</p>
                                        <p><i className="fa-solid fa-clock"></i>Pulished at: {newget.publishedAt.slice(0, 10)}<br /><i className="fa-solid fa-id-card"></i>Pulished by: {newget.source.name}<br /><i className="fa-solid fa-newspaper"></i>Read more at: <a href={newget.url}>{newget.source.name}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
