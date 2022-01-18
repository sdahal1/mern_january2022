import React from 'react';

const CryptoCoinsUsingFetch = ()=>{

    //fetch is a function that accepts an api endpoint (some link that gets us data from an api) and it returns a promise. What this means is that the response we get back from the api using fetch will arrive to our application in an undetermined amount of time. This is called a promise. A Promise is a pattern where the eventual response (and how long it will take to receive it) is not known. 
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        //.then means what to do when we eventually get the response back
        .then(response=>{
            console.log("got info back from api, here is the reposne", response)
        })

        //.catch will run if there are any errors in the api that we are getting information from
        .catch(err =>{
            console.log("errorrr!!!-->", err)
        })
    
    //in the amazon package example, this console.log is like us cooking breakfast. Even though we are expecting a package to come from amazon, we don't know exactly when the will arrive. While we are waiting for the response from the api in the .then(), we can still run some other code so our application doen't have to stop everything its doing just to wait for a response from an api
    console.log("this console.log is after the fetch promise, but will it run before the fetch get a response back? lets seee!!")


    return (
        <h3>Hello from crypto component</h3>
    )
}


export default CryptoCoinsUsingFetch;
