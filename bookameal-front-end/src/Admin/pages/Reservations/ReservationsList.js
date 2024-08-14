// src/pages/ReservationsList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import "./reservationsList.css";

export default function ReservationsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/reservations");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching reservations", error);
      }
    };

    fetchReservations();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "userName", headerName: "User Name", width: 200 },
    { field: "reservationDate", headerName: "Date", width: 200 },
    { field: "time", headerName: "Time", width: 150 },
    { field: "partySize", headerName: "Party Size", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
  ];

  return (
    <div className="reservationsListContainer">
      <div className="reservationsList">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          autoHeight
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
