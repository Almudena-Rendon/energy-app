import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";

export const FilterBalance = ({ setFilteredData, data }) => {
  const [powerType, setPowerType] = useState(data?.included[0].type);
  const [powerSource, setPowerSource] = useState(
    data?.included[0].attributes.content[0].type
  );
  const [powerSources, setPowerSources] = useState(
    data?.included[0].attributes.content
  );

  const selectPowerType = (e) => {
    setPowerType(e.target.value);
    let temp = data.included.filter((elem) => elem.type === e.target.value);
    setPowerSources(temp[0].attributes.content);
    setPowerSource(temp[0].attributes.content[0].type);
  };

  const selectPowerSource = (e) => {
    setPowerSource(e.target.value);
  };

  const onSubmit = () => {
    const temp = data.included.filter((elem) => elem.type === powerType);
    const tempFinal = temp[0].attributes?.content.filter(
      (elem) => elem.type === powerSource
    );
    setFilteredData({
      title: powerSource,
      data: tempFinal[0]?.attributes.values,
    });
  };

  return (
    <>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="powerType">Tipo de energía</InputLabel>
        <Select
          name="powerType"
          id="powerType"
          value={powerType}
          label="Tipo de energía"
          onChange={selectPowerType}
        >
          {data?.included.map((type) => {
            return (
              <MenuItem key={type.id} value={type.type}>
                {type.type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="powerSource">Fuente de energía</InputLabel>
        <Select
          name="powerSource"
          id="powerSource"
          label="Fuente de energía"
          value={powerSource}
          onChange={selectPowerSource}
        >
          {powerSources?.map((elem) => {
            return (
              <MenuItem key={elem.id} value={elem.type}>
                {elem.type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button
        fullWidth
        variant="contained"
        onClick={onSubmit}
        sx={{
          mt: 2,
          mb: 2,
          fontWeight: "bold",
          backgroundColor: "#379cf4",
          borderRadius: "5px",
          boxShadow: "none",
          border: "none",
          padding: "13px",
        }}
      >
        Filtrar
      </Button>
    </>
  );
};
