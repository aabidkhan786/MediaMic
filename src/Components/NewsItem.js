import React from 'react'

export default function NewsItem(props) {
  return (
    <div>
          <div className="card" style={{width: "18rem"}}>
              <img src={props.html_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="card-title">{props.id}</h5>
                      <p className="card-text">{props.id}</p>
                      {/* <a href="/" className="btn btn-sm btn-primary">Go somewhere</a> */}
                  </div>
          </div>
    </div>
  );
}
