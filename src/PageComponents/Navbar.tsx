import React, {useEffect, useState} from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CheckMobileScreen from '../ViewChecks/CheckMobileScreen';

const Navbar = () => {
  
  let isMobileScreen = CheckMobileScreen();

  const FONT_SIZE_WORDLE = 40
  const FONT_SIZE_WORDLE_MOBILE = 24

  const [fontSizeWordle, setFontSizeWordle] = useState(FONT_SIZE_WORDLE)

  useEffect(() => {
    if(isMobileScreen) {
      setDimensionsForMobile()
    }
    else {
      setDimensionsForDesktop()
    }
  });

  function setDimensionsForMobile()
  {
    setFontSizeWordle(FONT_SIZE_WORDLE_MOBILE)
  }
  
  function setDimensionsForDesktop()
  {
    setFontSizeWordle(FONT_SIZE_WORDLE)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontSize: fontSizeWordle,
              fontWeight: "bold",
              fontFamily: "Helvetica Neue, Helvetica"
            }}>
            Wordle Italiano
          </Typography>
          {/* <Button color="inherit">Impostazioni</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;