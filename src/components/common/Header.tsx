// import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "@/components/styles/Header.scss";

export const Header = () => {
  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#f63c27" }} position="static">
        <Toolbar>
          <Typography
            className="header__title"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <img
              className="header__logo"
              src="https://pokemonkorea.co.kr/img/icon/icon_ball_b.png"
              alt="logo"
            />
            오늘의 포켓몬
          </Typography>
          <Button color="inherit">???</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
