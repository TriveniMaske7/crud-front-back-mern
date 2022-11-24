import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Table() {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("http://localhost:8081/employee").then((result) => {
            console.log(result.data.data);
            setData(result.data.data)
        }, (err) => {
            console.log(err);
        })
    }, []);

    if (data !== undefined) {
        return (

            <>
            <h1>Employees Data</h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 text-right">
                       <Link to="/addemployee"><button className='btn btn-dark'>Add Employee</button></Link> <br /><br />
                    </div>
                </div>
            </div>
            <table className="table table-dark table-striped container">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phoneno</th>
                        <th rowSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data,i) => {
                          return  <tr key={i}>
                                <td>{i+1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phoneno}</td>
                                <td>
                                    <button>update</button>
                                    <button>delete</button>
                                </td>
                            </tr>
                        })
                    }
    
    
                </tbody>
            </table>
            </>)
    }
    else{
        return <div>waiting...</div>
    }

    
}

export default Table