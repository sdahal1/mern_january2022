import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const EditNinjaForm = () => {

    //state variables for each info collected from form
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [numBelts, setNumBelts] = useState(0)
    let [isVeteran, setIsVeteran] = useState(false)


    //get the route param info containing the id of the object we want to edit
    const { id } = useParams();

    //state variable to save the info i get back from api about one ninja (or one object)
    let [ninjaInfo, setNinjaInfo] = useState({})


    useEffect(()=>{
        //make an axios call to get information from the backend about one ninja using the api endpoint to get one ninja
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
        .then(res=>{
            console.log("response is this-->", res)
            setNinjaInfo(res.data.results)

        })
        .catch(err=> console.log(err))
    },[])
    


    const createNinjaSubmitHandler = (e)=>{
        e.preventDefault();
        // console.log(firstName, lastName, numBelts, isVeteran)

        // //put the info from form into an object
        // let formInfoObj = {firstName, lastName, numBelts, isVeteran};

        // axios.post("http://localhost:8000/api/ninjas", formInfoObj)
        //     .then(res=>{
        //         console.log("response after posting", res)
        //     })
        //     .catch(err=>console.log("error in submitting post request",err))  

    }

    return (
        <div>
            <h4>Edit Ninja Below</h4>
            <form onSubmit = {createNinjaSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input onChange = {(e)=>{setFirstName(e.target.value)}} type="text" name="" id="" className="form-control" value={ninjaInfo.firstName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input onChange = {(e)=>{setLastName(e.target.value)}} type="text" name="" id="" className="form-control" value={ninjaInfo.lastName} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input onChange = {(e)=>{setNumBelts(e.target.value)}} type="number" name="" id="" className="form-control" value={ninjaInfo.numBelts} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?</label>
                    <input onChange = {(e)=>{setIsVeteran(e.target.checked)}} type="checkbox" name="" id="" className="form-checkbox" checked={ninjaInfo.isVeteran} />
                </div>
                <input type="submit" value="Update Ninja!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default EditNinjaForm;