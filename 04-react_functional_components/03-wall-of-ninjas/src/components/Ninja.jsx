import React, {useState} from 'react';

const Ninja = (props) =>{
    //creating state variable(s) to keep track of information collected on the form
    let [ninjaName, setNinjaName ] = useState("");
    let [imageUrl, setImageUrl ] = useState("");
    let [favColor, setFavColor ] = useState("");


    return (
        <form>
            <div className="form-group">
                <label htmlFor="">Ninja name:</label>
                <input type="text" name="" id="" className="form-control" onChange = {(e)=>setNinjaName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Image Url:</label>
                <input type="text" name="" id="" className="form-control" onChange = {(e)=>setImageUrl(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Color:</label>
                <input type="text" name="" id="" className="form-control" onChange = {(e)=>setFavColor(e.target.value)}/>
            </div>
            <input type="submit" value="Create Ninja!" />
        </form>
    )
}


export default Ninja;