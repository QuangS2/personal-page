import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Container } from "@mui/system";
import MenuItems from "./MenuItems";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid #eee",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", px: 4 }}>
        {/* Logo / Brand */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          VOUDAS
        </Typography>

        {/* Menu Items */}
        <MenuItems />

        {/* Right Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </Toolbar>
      </Container>
      
    </AppBar>
  );
}
