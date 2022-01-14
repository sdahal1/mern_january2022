import React, {useState} from 'react';

const Ninja = (props) =>{
    //creating state variable(s) to keep track of information collected on the form
    let [ninjaName, setNinjaName ] = useState("");
    let [imageUrl, setImageUrl ] = useState("");
    let [favColor, setFavColor ] = useState("");


    const createNinja = (e)=>{
        e.preventDefault(); //the default behavior of a form when submitting is to reload the page and we are prventing that from happening b/c we don't want the page to reload
        console.log("submitted the form!")
        console.log(ninjaName,imageUrl, favColor)
        let ninjaObj = {ninjaName, imageUrl, favColor}
        console.log(ninjaObj);
    }


    return (
        <form onSubmit = {createNinja}>
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