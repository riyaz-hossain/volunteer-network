import React from 'react';
import fakeData from '../../../fakeData/FakeData'


const Banner = () => {

    const handleAddVolunteer = ()=>{
        fetch('https://arcane-savannah-39897.herokuapp.com/volunteer' , {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <div className="my-5">
            <h3 className="mb-5 text-uppercase">I grow by helping People In need</h3>
            <div className="d-flex justify-content-center align-items-center">
                <input type="search" name="search"placeholder="Search..." id="" />
                <button className="btn btn-primary" onClick={handleAddVolunteer} >Search</button>
            </div>
        </div>
    );
};

export default Banner;