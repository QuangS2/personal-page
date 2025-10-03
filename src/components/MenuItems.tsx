import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "" },        // index route
  { label: "About", path: "about" },
  { label: "Portfolio", path: "portfolio" },
  { label: "Blog", path: "blog" },
  { label: "Contact", path: "contact" },
];

export default function MenuItems() {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            textDecoration: "none",
            borderBottom: isActive ? "2px solid #1976d2" : "none",
          })}
        >
          <Button
            sx={{
              fontWeight: 500,
              textTransform: "none",
              color: "text.primary",
              borderRadius: 0,
            }}
          >
            {item.label}
          </Button>
        </NavLink>
      ))}
    </Box>
  );
}
