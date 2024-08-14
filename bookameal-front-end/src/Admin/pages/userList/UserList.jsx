// src/pages/userList/UserList.js
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState([]); // Start with an empty array

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90, sortable: false },
    {
      field: "user",
      headerName: "User",
      width: 200,
      sortable: false,
      renderCell: () => {
        return (
          <div className="userListUser">
            <img className="userListImg" src="" alt="" />
            {"username"}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200, sortable: false },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      renderCell: () => {
        return (
          <>
            <Link to={"/user/"}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete("")}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data} // Initially an empty array
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}
