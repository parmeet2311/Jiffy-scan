import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import { Menu } from "@mui/material";
import Select from "@mui/material/Select";
import { IconButton } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import { GoFilter } from "react-icons/go";

const names = ["Design", "Frontend", "Backend", "Blockchain", "Content"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      marginTop: "10px",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
  anchorOrigin: { vertical: "bottom", horizontal: "right" },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
};

export const FilterComponent = ({ skillName, setSkillName }) => {
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const handleSelectChange = (event) => {
    const selectedValues = event.target.value;
    setSkillName(selectedValues);
  };

  const handleMenuItemClick = (value) => {
    const currentIndex = skillName.indexOf(value);
    const newSelected = [...skillName];

    if (currentIndex === -1) {
      newSelected.push(value);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    setSkillName(newSelected);
  };

  const handleFilterIconClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setFilterAnchorEl(null);
  };

  const isMenuOpen = Boolean(filterAnchorEl);

  return (
    <div className="flex items-center">
      <div className="hidden lg:flex items-center">
        <Typography
          className="font-semibold whitespace-nowrap hidden lg:flex gap-x-[10px]"
          variant="subtitle2"
        >
            <GoFilter className="text-lg"/>
          Filter By
        </Typography>
        <div className="hidden lg:block">
          <FormControl sx={{ width: "152px", height: "34px" }}>
            <Select
              multiple
              className="ml-4"
              sx={{ height: "34px" }}
              value={skillName}
              MenuProps={MenuProps}
              onChange={handleSelectChange}
            
              renderValue={(selected) => (selected.length === 0 ? "All" : selected.join(", "))}
              size="small"
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={skillName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="lg:hidden">
        <IconButton className="lg:hidden" onClick={handleFilterIconClick}>
          <FaFilter />
        </IconButton>
        <Menu
          anchorEl={filterAnchorEl}
          open={isMenuOpen}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: 320,
              maxWidth: "100%",
              height: "200px",
              overflowY: "scroll",
            },
          }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              onClick={() => handleMenuItemClick(name)}
            >
              <Checkbox checked={skillName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default FilterComponent;
