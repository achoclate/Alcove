import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import "./reservationsList.css";

export default function ReservationsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get("https://alcove.onrender.com/reservations");
        console.log(response.data); // Debugging line
        setData(response.data);
      } catch (error) {
        console.error("Error fetching reservations", error);
      }
    };

    fetchReservations();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "guest_count", headerName: "Guests", width: 150 }, // Changed Party Size to Guests
    { field: "date", headerName: "Date", width: 200 },
    { field: "time", headerName: "Time", width: 150 },
  ];

  // Map data to include id and fields expected by DataGrid
  const rows = data.map(reservation => ({
    id: reservation.id,
    guest_count: reservation.guest_count,
    date: reservation.date,
    time: reservation.time,
  }));

  return (
    <div className="reservationsListContainer">
      <div className="reservationsList">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          autoHeight
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
