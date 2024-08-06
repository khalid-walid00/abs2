import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookie from "cookie-universal";
import { useNavigate } from 'react-router';
import { Tooltip } from '@mui/material';
import { t } from 'i18next';

export default function Logout() {
  const cookie = Cookie();
  const nav = useNavigate();

  const handleClick = () => {
    cookie.remove("access");
    nav("/login");
  };

  return (
    <Box sx={{ zIndex: 999999999 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip
            title={cookie.get("access") ? "login": "logout"}
            arrow 
            placement="top"
            PopperProps={{
              modifiers: [
                {
                  name: 'zIndex',
                  enabled: true,
                  phase: 'main',
                  fn: ({ state }) => {
                    state.styles.popper.zIndex = 999999999;
                  }
                }
              ]
            }}
          >
        
              
              <LogoutIcon  onClick={handleClick}      sx={{
                borderRadius: "50%",
                backgroundColor: "transparent",
                color: "#215c7e",
                width: "40px", 
                height: "40px", 
                display: "flex",
                p: "10px",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #166b9c",
                zIndex: 99999999,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                ":hover": { backgroundColor: "#215c7e", color: "white" },
              }} />
            {/* </Button> */}
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
