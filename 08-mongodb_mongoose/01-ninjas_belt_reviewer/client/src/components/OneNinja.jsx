import React from 'react';
import { useParams } from "react-router";

const OneNinja = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Details about One Ninja</h1>
            <p>ID: {id}</p>
        </div>
    );
};


export default OneNinja;