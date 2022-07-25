import React ,{useEffect,useState}from "react";
import './App.css'
import axios from "axios"
import {Link} from "react-router-dom"

export default function App({data1}) {
 let [da,setda] = useState([])
  useEffect(()=>{
    let dataget = async ()=>{
      let d= await axios.get("https://api.tvmaze.com/search/shows?q=all");
      console.log("h",d.data)
      setda(d.data)
      
    }
    dataget();
   
  },[])
  data1(da)
  return (
    <div className="main">
      {
        da.length !==0?
        da.map((d)=>{
          console.log(d.show.id)
          return(
            <div className="box" key={d.show.id}>
              <div className="img-container">
                <img src={d.show.image.medium} alt="img"/>
              </div>
              <div className="data-container">
                   <div className="d-name">{d.show.name}</div>
                   <div className="d-type">{d.show.type}</div>
                   <div className="d-lang">{d.show.language}</div>
                   <button ><Link to={`/spec/${d.show.id}`} style={{paddingLeft: 13, textDecoration: 'none'}}>Summary</Link></button>
              </div>
            </div>
          )
        }):null
      }
    </div>

  );
}
