import React from 'react'
import './Specific.css'
import { Link, useParams } from 'react-router-dom';

export default function({input}) {

    const param = useParams();
    // let [single,sets]=useState("")
    // console.log(single);
    let filterdata = input.filter((d) =>{
        return d.show.id == param.id
    })
    console.log(filterdata);
  return (
    <div className='specific'>
        {
          filterdata.length!==0?
          filterdata.map((d)=>{
             return (
              <div className="box1" key={d.show.id}>
              <div className="img-container-s">
                <img src={d.show.image.medium} alt="img"/>
              </div>
              <div className="data-container-s">
                   <div className="d-name"><strong>Movie name :- </strong>{d.show.name}</div>
                   <div className="d-type"><strong>Movie Type :- </strong>{d.show.type}</div>
                   <div className="d-lang"><strong>Movie Language :- </strong>{d.show.language}</div>
                   <br/>
                   <strong>Summary</strong>
                  {d.show.summary}
                  <br/>
                  <button><Link to={`/buy/${d.show.id}`}>Buy Now</Link></button>
              </div>
            </div>
             )
          }):null
        }
        
    </div>
    
  )
}
