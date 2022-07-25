import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Buy.css";
import axios from "axios";

export default function Buy({ input1 }) {
  const [value, setvalue] = useState({});
  const param = useParams();
  let [da,setda] = useState([])
  useEffect(()=>{
    let dataget = async ()=>{
      let d= await axios.get("https://api.tvmaze.com/search/shows?q=all");
      console.log("h",d.data)
      setda(d.data)
      
    }
    dataget();
   
  },[])

  let filterdata = da.filter((d) => {
    return d.show.id == param.i;
  });

  return (
    <div className="Buy-form">
      {filterdata.map((d) => {
        return (
          <div className="form">
            <label>User Name</label>
            <input
              type="text"
              onChange={(e) => {
                setvalue({
                  ...value,
                  userName: e.target.value,
                });
              }}
            />
            <br />
            <label>User ID</label>
            <input
              type="text"
              onChange={(e) => {
                setvalue({
                  ...value,
                  userId: e.target.value,
                });
              }}
            />
            <br />
            <label>Movie Name</label>
            <input value={d.show.name} disabled />
            <br />
            <label>Realase On</label>
            <input value={d.show.premiered} disabled />
            <br />
            <label>Timing</label>
            <input value={d.show.schedule.time} disabled />
            <br />
            <label>Quantity</label>
            <input
              type="number"
              onChange={(e) => {
                setvalue({
                  ...value,
                  userQuantity: e.target.value,
                });
              }}
            />
            <br />
            <button
              onClick={() => {
                let newData = {
                  ...value,
                  movieName: d.show.name,
                  releaseOn: d.show.premiered,
                  Timing: d.show.schedule.time,
                };

                let oldData = JSON.parse(
                  window.localStorage.getItem("Data")
                );
                if (!oldData) {
                  oldData = [];
                }
                let data = [...oldData, newData];

                window.localStorage.setItem("Data", JSON.stringify(data));

                console.log(data);
              }}
            >
              Submit
            </button>
          </div>
        );
      })}
    </div>
  );
}
