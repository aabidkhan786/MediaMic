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
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=8fc5d29e9f8147968ccc87304f7669a0")
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
  }, [])
  return (
    <>
      <Navbar title="THE GAZETTA POST" />
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
                    <p>Pulished at: {newget.publishedAt.slice(0,10)}<br/>Pulished by: {newget.source.name}<br/>Read more at: <a href={newget.url}>{newget.source.name}</a></p>
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