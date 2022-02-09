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
  }, [])
  return (
    <>
      <Navbar title="Media Mic - A News App" />
      <div className="container my-3">
        {headline.map((newget) => {
          return (
            <div className="container d-flex justify-content-start mt-3 shadow-container col-9 padding-0 bg-white border-post" key={newget.url}>
              <div className='w-50 col-3 ml-0 p-1'><img src={newget.urlToImage} alt="astronaut" className="img-fluid border image-border" /></div>
              <div className='mt-1 col-6 px-2'>
                <div className="form-group mt-1">
                  <p className='title-font'>" {newget.title} "</p>
                  <p>{newget.description}</p>
                  <p>Read more at: <a href={newget.url}>{newget.source.name}</a></p>
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