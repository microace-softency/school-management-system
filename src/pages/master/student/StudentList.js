import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './StudentStyle.css';
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEyeSearch } from "react-icons/tb";
import Table from "../../../components/Table";

const StudentList = () => {
    const navigate = useNavigate();
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
            setTimeout(() => loadData(), 500);
        }
    };

    const columns = [
        {
            header: "Name",
            accessorKey: "name",
        },
        {
            header: "Email",
            accessorKey: "email",
        },
        {
            header: "Contact",
            accessorKey: "contact",
        }
    ];
    
    const handleView = (data) => {
        navigate(`/studentmaster/${data}`)
      }
    return (
        <div>
            <button className="btn btn-contact" onClick={() => navigate('/studentmaster')}>Add Student</button>
            {error && <div>Error: {error}</div>}
            <Table
                data={data}
                columns={[
                    {
                        header: "No.",
                        cell: (row) => {
                            return (
                            <>
                                {row.cell.row.index+1}
                            </>
                        );
                    }},
                    
                    ...columns,
            {
            header: "Actions",
            cell: (row) => {
                return (
                <>
                    <button className="btn btn-view" onClick={() => handleView(row?.row?.original?.id)}><TbEyeSearch/></button>
                    <button className="btn btn-delete" onClick={() => deleteContact(row?.row?.original?.id)}><RiDeleteBinLine/></button>
                </>
            );
        }}]} />
        </div>
    );
};

export default StudentList;
