import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";

export const Filter = ({ setFilteredData, data }) => {
  const [type, setType] = useState(data?.included[0].type);

  const selectType = (e) => {
    setType(e.target.value);
  };

  const onSubmit = () => {
    const temp = data.included.filter((elem) => elem.type === type);
    setFilteredData({
      title: type,
      data: temp[0]?.attributes.values,
    });
  };

  return (
    <>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="energyType">Subcategorías</InputLabel>
        <Select
          name="energyType"
          id="energyType"
          value={type}
          label="Subcategorías"
          onChange={selectType}
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
