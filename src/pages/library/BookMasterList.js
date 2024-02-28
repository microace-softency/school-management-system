import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './BookMasterStyle.css';
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";

// import Table from "../../../components/Table";

import AddIcon from '@mui/icons-material/Add';
import Table from "../../components/Table";

const BookMasterList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:3002/api/book");
            setData(response.data[0]);
            console.log('555',response.data[0]);
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        loadData();
    }, []);
    const deleteContact = (id) =>{
        if(window.confirm("Are you sure that you wanted to delete that student ?")){
            axios.delete(`http://localhost:3002/api/removebook/${id}`);
            toast.success("Book Delete Successfully");
            setTimeout(() => loadData(), 500);
        }
    };

    const columns = [
        {
            header: "Book Code",
            accessorKey: "bookCode",
        },
        {
            header: "Book Group",
            accessorKey: "bookGroup",
        },
        {
            header: "Book Name",
            accessorKey: "bookName",
        },
        {
            header: "Publisher Name ",
            accessorKey: "publisherName",
        },
        {
            header: "Quantity ",
            accessorKey: "quantity",
        },
        {
            header: "WriterName",
            accessorKey: "writerName",
        },
    ];
    
    const handleView = (data) => {
        navigate(`/viewbookmaster/${data}`)

      }
    const handleUpdate = (data) =>{
        navigate(`/bookmaster/${data}`)
    }
    return (
        <div>
            <button className="btn btn-contact" onClick={() => navigate('/bookmaster')}><AddIcon /></button>
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
                    <button className="btn btn-update"  onClick={() =>  handleUpdate(row?.row?.original?.id)}><FaPen/></button>
                    <button className="btn btn-view" onClick={() => handleView(row?.row?.original?.id)}><IoIosEye/></button>
                    <button className="btn btn-delete" onClick={() => deleteContact(row?.row?.original?.id)}><RiDeleteBinLine/></button>
                </>
            );
        }}]} />
        </div>
    );
};

export default BookMasterList;