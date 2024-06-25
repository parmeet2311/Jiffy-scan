import { useState, Fragment } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { LuUser } from "react-icons/lu";
// ** Styled Components
const BadgeContentSpan = styled("span")(({ theme }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: "#4CAF50",
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));

const styles = {
  py: "10px",
  px: "16px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  color: "text.primary",
  textDecoration: "none",
  "& svg": {
    mr: 2,
    fontSize: "14px",
    color: "text.primary",
  },
};

const UserDropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const router = useRouter();

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url) => {
    if (url) {
      router.push(url);
    }
    setAnchorEl(null);
  };

  

  return (
    <Fragment>
      <div
        onClick={handleDropdownOpen}
        className="relative flex items-center gap-x-[12px] cursor-pointer"
      >
        <Badge
          overlap="circular"
          color="black"
          sx={{ cursor: "pointer" }}
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar
            sx={{
              background: "#F9F5FF",
              color: "#195BDF",
              fontSize: "16px",
              fontFamily: "",
            }}
            alt="Olivia Rhye"
            src="/path/to/avatar.png"
          >
            OR
          </Avatar>
        </Badge>
        <div className="hidden xl:block">
          <p className="text-black font-inter font-semibold">Olivia Rhye</p>
          <p className="text-[#5A5A62] font-inter">olivia@jiffyscan.xyz</p>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{
          "& .MuiMenu-paper": {
            width: 230,
            mt: 4,
            boxShadow: "none",
            border: "1px solid #DADCE0",
          },
          boxShadow: "none",
          padding: 0,
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          sx={{ p: 0 }}
          onClick={() => handleDropdownClose("/pages/user-profile/profile")}
        >
          <Box sx={styles}>
            <div className="mr-3">
              <Image
                alt=""
                src={"/assets/card/profile.png"}
                width={15}
                height={0}
              />
            </div>
            View Profile
          </Box>
        </MenuItem>
        <MenuItem
          sx={{ p: 0 }}
          onClick={() => handleDropdownClose("/pages/user-profile/profile")}
        >
          <Box sx={styles}>
            <div className="mr-3">
              <Image
                alt=""
                src={"/assets/card/Dashboard.png"}
                width={15}
                height={0}
              />
            </div>
            Dashboard
          </Box>
        </MenuItem>
        <MenuItem
          sx={{ p: 0 }}
          onClick={() => handleDropdownClose("/pages/user-profile/profile")}
        >
          <Box sx={styles}>
            <div className="mr-3">
              <Image
                alt=""
                src={"/assets/card/api.png"}
                width={15}
                height={0}
              />
            </div>
            API
          </Box>
        </MenuItem>

        <Divider />

        <MenuItem
          sx={{ p: 0 }}
          onClick={() => handleDropdownClose("/pages/faq")}
        >
          <Box sx={styles}>
            <div className="mr-3">
              <Image
                alt=""
                src={"/assets/card/logout.png"}
                width={15}
                height={0}
              />
            </div>
            Log out
          </Box>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default UserDropdown;
