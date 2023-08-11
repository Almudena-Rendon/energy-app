import { Box, Typography } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { LinearChart } from "./LinearChart";
import { HorizontalChart } from "./HorinzontalChart";
import { PieChart } from "./PieChart";
import { VerticalBarChart } from "./VerticalCjart";

export const Graphics = ({ filteredData }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "90%",
        typography: "body1",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        overflowY: "auto",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            minHeight: "770px",
            maxHeight: "700px",
            overflowY: "auto",
            "@media (max-width:500px)": {
              minHeight: "270px",
            },
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Gráfico de líneas" value="1" />
              <Tab label="Gráfico de barras horizontales" value="2" />
              <Tab label="Gráfico de barras verticales" value="3" />
              <Tab label="Gráfico circular" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <LinearChart filteredData={filteredData} />
          </TabPanel>
          <TabPanel value="2">
            <HorizontalChart filteredData={filteredData} />
          </TabPanel>
          <TabPanel value="3">
            <VerticalBarChart filteredData={filteredData} />
          </TabPanel>
          <TabPanel value="4">
            <PieChart filteredData={filteredData} />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};
