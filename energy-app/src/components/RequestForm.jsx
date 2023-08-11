import React, { useState } from "react";
import axios from "axios";
import { FilterBalance } from "./FilterBalance";
import { Filter } from "./Filter";
import Swal from "sweetalert2";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import categories from "../utils/data";

const URL_base = "https://apidatos.ree.es/es/datos/";

export const RequestForm = ({ setFilteredData }) => {
  const [widgets, setWidgets] = useState(categories[0].widgets);
  const [error, setError] = useState();
  const [request, setRequest] = useState({
    category: "balance",
    widget: "balance-electrico",
    startDate: "",
    endDate: "",
    timeTrunc: "day",
  });

  const [data, setData] = useState();

  const handlerSelectCategory = (e) => {
    const arrayTemp = categories.filter(
      (elem) => elem.category === e.target.value
    )[0].widgets;
    setWidgets(arrayTemp);
    setRequest({ ...request, category: e.target.value, widget: arrayTemp[0] });
    setData();
  };

  const handlerSelectWidget = (e) => {
    setRequest({ ...request, widget: e.target.value });
    setData();
  };

  const handlerStartDate = (e) => {
    setRequest({ ...request, startDate: e.target.value });
    setData();
  };

  const handlerEndDate = (e) => {
    setRequest({ ...request, endDate: e.target.value });
    setData();
  };

  const handlerTrunc = (e) => {
    setRequest({ ...request, timeTrunc: e.target.value });
    setData();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `${URL_base}${request.category}/${request.widget}?start_date=${request.startDate}&end_date=${request.endDate}&time_trunc=${request.timeTrunc}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "errorrr");
        setError(err.response.data.errors[0].detail);
        Swal.fire({
          showConfirmButton: true,
          icon: "error",
          text: err.response.data.errors[0].detail,
        });
      });
  };

  return (
    <Box
      sx={{
        padding: "25px",
        marginLeft: "10%",
        flexGrow: 1,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Avatar
        sx={{
          width: "50px",
          height: "50px",
          mr: 1,
          margin: "10px",
          backgroundColor: "#71c55b",
        }}
      >
        <EnergySavingsLeafIcon />
      </Avatar>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          mb: 1,
          fontFamily: "sans-serif",
          fontWeight: 1000,
          fontSize: "30px",
          letterSpacing: ".2rem",
          color: "#71c55b",
          textDecoration: "none",
          "@media (max-width:500px)": {
            fontSize: "20px",
          },
        }}
      >
        Realiza tu consulta
      </Typography>
      <Box noValidate sx={{ mt: 1 }}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="category">Categoria</InputLabel>
          <Select
            name="category"
            id="category"
            value={request.category}
            label="category"
            onChange={handlerSelectCategory}
          >
            {categories.map((elem, index) => {
              return (
                <MenuItem key={index} value={elem.category}>
                  {elem.category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="widget">Widget</InputLabel>
          <Select
            name="widget"
            id="widget"
            label="widget"
            value={request.widget}
            onChange={handlerSelectWidget}
          >
            {widgets.map((elem, index) => {
              return (
                <MenuItem key={index} value={elem}>
                  {elem}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="timeTrunc">Time trunc</InputLabel>
          <Select
            name="timeTrunc"
            id="timeTrunc"
            label="timeTrunc"
            value={request.timeTrunc}
            onChange={handlerTrunc}
          >
            <MenuItem value="day">Día</MenuItem>
            <MenuItem value="month">Mes</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField
            type="date"
            name="startDate"
            id="startDate"
            label="Fecha de inicio"
            value={request.startDate}
            onChange={handlerStartDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField
            type="date"
            name="endDate"
            id="endDate"
            label="Fecha de finalización"
            value={request.endDate}
            onChange={handlerEndDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={onSubmit}
          sx={{
            mt: 3,
            mb: 2,
            fontWeight: "bold",
            backgroundColor: "#379cf4",
            borderRadius: "5px",
            boxShadow: "none",
            border: "none",
            padding: "13px",
          }}
        >
          Ejecutar
        </Button>
      </Box>
      {data && request.category === "balance" && (
        <FilterBalance data={data} setFilteredData={setFilteredData} />
      )}
      {data && request.category !== "balance" && (
        <Filter data={data} setFilteredData={setFilteredData} />
      )}
    </Box>
  );
};
