import React, { useState } from "react";
import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const departments = [
  {
    name: "Agriculture & Fishing",
    subDepartments: [
      "Agriculture",
      "Crops",
      "Farming Animals & Livestock",
      "Fishery & Aquaculture",
      "Ranching",
    ],
  },
  {
    name: "Business Services",
    subDepartments: [
      "Accounting & Accounting Services",
      "Auctions",
      "Business Services - General",
      "Call Centers & Business Centers",
      "Career Planning",
      "Career",
      "Commercial Printing",
      "Debt Collection",
    ],
  },
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const toggleDepartment = (department: string) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [department]: !prevOpen[department],
    }));
  };

  const toggleSubDepartment = (subDepartment: string) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [subDepartment]: !prevSelected[subDepartment],
    }));
  };

  const toggleAllSubDepartments = (department: string) => {
    const allSelected = departments
      .find((d) => d.name === department)
      ?.subDepartments.every((sd) => selected[sd]);

    const newSelected = { ...selected };
    departments
      .find((d) => d.name === department)
      ?.subDepartments.forEach((sd) => {
        newSelected[sd] = !allSelected;
      });

    setSelected(newSelected);
  };

  return (
    <List>
      {departments.map((department, index) => (
        <Box key={index}>
          <ListItem button onClick={() => toggleDepartment(department.name)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={department.subDepartments.every((sd) => selected[sd])}
                tabIndex={-1}
                disableRipple
                onClick={() => toggleAllSubDepartments(department.name)}
              />
            </ListItemIcon>
            <ListItemText primary={department.name} />
            {open[department.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[department.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((subDepartment, subIndex) => (
                <ListItem button key={subIndex} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={!!selected[subDepartment]}
                      tabIndex={-1}
                      disableRipple
                      onClick={() => toggleSubDepartment(subDepartment)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDepartment} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      ))}
    </List>
  );
};

export default DepartmentList;
