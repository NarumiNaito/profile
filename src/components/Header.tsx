import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const navItems: string[] = ["Home", "About", "Contact"];

const Header: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#ffc107" }}>
        <Toolbar>
          <Typography textAlign="left" variant="h6" component="div" sx={{ color: "black", flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Profile
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "black" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
