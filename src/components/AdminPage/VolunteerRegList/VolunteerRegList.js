import React, { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';



const VolunteerRegList = () => {

    const [regInfo, setRegInfo] = useState([]);

    useEffect(() => {
        fetch('https://arcane-savannah-39897.herokuapp.com/adminPanel')
            .then(res => res.json())
            .then(data => setRegInfo(data))
    })

    return (
        <div>
            <div className='mt-5'>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registration date </th>
                            <th scope="col"> Volunteer List </th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            regInfo.map(info => <tr key={info._id}>
                                <td >{info.name}</td>
                                <td>{info.email}</td>
                                <td>{info.date}</td>
                                <td>{info.title}</td>
                                <td  >
                                    <button className="text-danger" style={{fontSize:"25px" , border:"none" , background:"none"}}> <DeleteOutlineIcon /> </button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolunteerRegList;