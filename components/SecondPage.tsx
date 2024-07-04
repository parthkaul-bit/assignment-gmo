import React from "react";
import { Box } from "@mui/material";
import DataGridComponent from "./DataGridComponent";
import DepartmentList from "./DepartmentList";

const SecondPage: React.FC = () => {
  return (
    <Box>
      <DataGridComponent />
      <DepartmentList />
    </Box>
  );
};

export default SecondPage;
