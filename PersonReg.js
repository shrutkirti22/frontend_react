import React,{useState} from "react";
import axios from 'axios';
import DetailCard from './DetailCard'

function PersonReg(props)
{
    const [name, setName] = useState("");
    const [person,setPerson] = useState("");

   function fetchdataByName(){
        let url = 'http://localhost:5000/isPersonRegistered'
        alert(url)
         axios.get(url,{name})
            .then(res => {
                alert(JSON.stringify(res))
                console.log(res.data);
                let person = res.data;
                setPerson({ person });
                // console.log(this.state.persons)
            }).then(console.error())
    }
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={e => {
                    setName(e.target.value);
                }}
                placeholder="Enter Name"
            />
            <button type="button" onClick={fetchdataByName}>Find Data</button>

            <h3>{person > 0 ? "data available":"not available"}</h3>

            {person>0 ?person.map(obj => { 
                <h1>{obj.name}</h1>
            }):""}

            



        </div>

   );

}
export default PersonReg;