import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {

  const [headline, setHeadline] = useState([]);
  //This piece of code doesn't workout but when i changed it's function name it get triggerd. 
  // const getNews = async () => {
  //   const response = await fetch("https://api.github.com/user");
  //   setNewz(await response.json());
  // }

  const getUsers = () => {
    fetch("https://newsapi.org/v2/everything?q=india&apiKey=8fc5d29e9f8147968ccc87304f7669a0")
      .then(response => response.json())
      .then(data => setHeadline(data.articles))
  }


  // const getUsers = async () => {
  //   let response = await fetch('https://newsapi.org/v2/everything?q=india&apiKey=8fc5d29e9f8147968ccc87304f7669a0')
  //   let data = await (response.json())
  //   setHeadline(data.headline);
  // }

  useEffect(() => {
    getUsers();
  },[])
  return (
    <>
      <Navbar title="Media Mic - A News App" />
      <div className="container my-3">
        {headline.map((newget) => {
          return (
            <div className="row my-3 mx-3 d-inline-flex justify-content-center" key={newget.url}>
              <div className="col-md-3 my-2">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={newget.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{newget.title}</h5>
                    <p className="card-text">Description: {newget.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}
export default App;
