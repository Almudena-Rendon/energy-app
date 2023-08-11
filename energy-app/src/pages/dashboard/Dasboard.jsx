import * as React from "react";
import { useState } from "react";
import { RequestForm } from "../../components/RequestForm";
import { Grid } from "@mui/material";
import { Graphics } from "../../components/graphics/Graphics";
import DataTableComponent from "../../components/DataTable";

export const Dasboard = () => {
  const [filteredData, setFilteredData] = useState();

  return (
    <>
      <Grid container spacing={5} alignItems="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={6} lg={4}>
          <RequestForm setFilteredData={setFilteredData} />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          {filteredData ? <Graphics filteredData={filteredData} /> : null}
        </Grid>
      </Grid>
      <Grid item sx={{ marginLeft: "2vw" }}>
        {filteredData ? (
          <DataTableComponent filteredData={filteredData} />
        ) : null}
      </Grid>
    </>
  );
};
