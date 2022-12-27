import { useEffect,useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


  const App = () => {
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [movieWebsite, setMovieWebsite] = useState("");
  
    const handleChange = event => {
      setTitle(event.target.value);
    };
  
    const formSubmit = event => {
      event.preventDefault();
      console.log(title);
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          console.log('All Response',res);
          console.log(res.data.Year);
          setPoster(res.data.Poster);
          setMovieWebsite(res.data.Website);
        })
        .catch(error => {
          console.log(error);
        });
      // Setting the input box back to empty
      setTitle("");
    };
  
    return (
      <div className="App">
        <h1>Vidtech User Details Search</h1>
        <br />
  
        <form onSubmit={formSubmit}>
          <label htmlFor="title">Search user By name,ID</label>
          <br />
          <br />
          <input type="text" name="title" value={title} onChange={handleChange} />
          <br />
          <br />
          <input type="submit" value="Search" />
        </form>
  
        <br />
  
        <a href={movieWebsite} target="_blank" />
        <br />
        <br />
  
        <img src={poster} />
      </div>
    );
  };


export default App;
