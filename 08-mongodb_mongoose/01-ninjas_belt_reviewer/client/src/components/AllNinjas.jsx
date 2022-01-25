import React, {useState, useEffect} from 'react';
import axios from 'axios'

const AllNinjas = () => {

    let [allNinjas, setAllNinjas] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas/")
            .then(res=>{
                console.log("response when getting all ninjas-->", res)
                //response.data.results we want to save into state (this represents the array of ninja objects)
                setAllNinjas(res.data.results)
            })
            .catch(err=> console.log("ERROR", err))
    },[])

    return (
        <div>
            <h3>All the Ninjas</h3>
            {allNinjas.map((ninjaObj, i)=>{
                return(
                    <div style = {{border: "1px solid black"}}>
                        <h4>{ninjaObj.firstName} {ninjaObj.lastName}</h4>
                        <p>Number of belts: {ninjaObj.numBelts}</p>

                    </div>
                )
            })}
        </div>
    );
};

export default AllNinjas;