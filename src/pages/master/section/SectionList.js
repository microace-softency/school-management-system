import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import '../ClassStyle.css';
import '../class/ClassStyle.css';
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEyeSearch } from "react-icons/tb";
import Table from "../../../components/Table";

import AddIcon from '@mui/icons-material/Add';
import { IoIosEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";

const ScetionList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:3002/api/section");
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
            axios.delete(`http://localhost:3002/api/removeclass/${id}`);
            toast.success("Class Delete Successfully");
            setTimeout(() => loadData(), 500);
        }
    };

    const columns = [
        {
            header: "Section Name",
            accessorKey: "sectionname",
        },
        {
            header: "Class Name",
            accessorKey: "classname",
        }
    ];
    
    const handleView = (data) => {
        navigate(`/classmaster/${data}`)
      }
    const handleUpdate = (data) =>{
        navigate(`/viewclassmaster/${data}`)
    }
    return (
        <div>
            <button className="btn btn-contact" onClick={() => navigate('/sectionmaster')}><AddIcon /></button>
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
                    <button className="btn btn-update"  onClick={() => handleView(row?.row?.original?.id)}><FaPen/></button>
                    <button className="btn btn-view" onClick={() => handleUpdate(row?.row?.original?.id)}><IoIosEye/></button>
                    <button className="btn btn-delete" onClick={() => deleteContact(row?.row?.original?.id)}><RiDeleteBinLine/></button>
                </>
            );
        }}]} />
        </div>
    );
};

export default ScetionList;