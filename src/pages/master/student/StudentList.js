import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import './StudentStyle.css'
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEyeSearch } from "react-icons/tb";



const StudentList = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:3002/api/student");
            setData(response.data[0]);
            console.log(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) =>{
        if(window.confirm("Are you sure that you wanted to delete that student ?")){
            axios.delete(`http://localhost:3002/api/remove/${id}`);
            toast.success("Student Delete Successfully");
            setTimeout(()=> loadData(), 500)
        }
    }

    return (
        <>
        <div style={{ marginTop: "5%" }}>
        <button className="btn btn-contact" onClick={()=>navigate('/studentmaster')}>Add Student</button>
            {error && <div>Error: {error}</div>}
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>
                                {/* <button className="btn btn-update" onClick={()=>navigate(`/studentmaster/${item.id}`)}>Update</button > */}
                                <button className="btn btn-view" onClick={()=>navigate(`/studentmaster/${item.id}`)}><TbEyeSearch/></button >
                                <button className="btn btn-delete" onClick={() => deleteContact(item.id)}><RiDeleteBinLine/></button >
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default StudentList;