import { Divider, List, ListItemButton } from '@mui/material';
import React from 'react';
import SoildLink from '../Links/soildLink';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
function SideList({items}) {
    return (
        <>
             <Divider />
      <List>
      {items?.map((item, index) => (  
                <ListItemButton  sx={{ backgroundColor: 'transparent' ,padding:"0px",margin:"0px",boxShadow:"none",}} >
  
              
         <SoildLink  icon={item.icon} text={item.title} 
          className="flex justify-around flex-row-reverse px-3  items-center bg-white  text-black" href={item.href}>
         
</SoildLink>
            </ListItemButton>
        ))}
      </List>
        </>
    );
}

export default SideList;