import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ChartsFuel from "./ChartsFuel";
import StorageDetails from "./StorageDetails";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StorageHandler() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>Fuel still present in the tanks</h1>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile={true}
          aria-label="scrollable force tabs example">
          <Tab
            label="Chart"
            {...a11yProps(0)}
          />
          <Tab
            label="Petrol"
            {...a11yProps(1)}
          />
          <Tab
            label="Diesel"
            {...a11yProps(2)}
          />
          <Tab
            label="Lpg"
            {...a11yProps(3)}
          />
          <Tab
            label="Methane"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}>
        <ChartsFuel />
      </CustomTabPanel>

      <CustomTabPanel
        value={value}
        index={1}>
        <StorageDetails fuel="PETROL" />
      </CustomTabPanel>

      <CustomTabPanel
        value={value}
        index={2}>
        <StorageDetails fuel="DIESEL" />
      </CustomTabPanel>

      <CustomTabPanel
        value={value}
        index={3}>
        <StorageDetails fuel="LPG" />
      </CustomTabPanel>

      <CustomTabPanel
        value={value}
        index={4}>
        <StorageDetails fuel="METHANE" />
      </CustomTabPanel>
    </Box>
  );
}
