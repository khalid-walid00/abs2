import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ArbicIcon from "../../media/images/translate/ar.png";
import EnglishIcon from "../../media/images/translate/english_16785510.png";
import LanguageIcon from "../../media/images/translate/foreign-language_9100378 (1).png";
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { ToggleLanguage } from '../../tools/redux/Slices/Toggle';

const languages = ['عربي', 'English'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  // const { t } = useTranslation();
  // const { i18n } = useTranslation();
 const dispatch = useDispatch();
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    const correctValue = value === 'English' ? 'en' :'ar' ;
    // i18n.changeLanguage(correctValue);
    localStorage.setItem("i18nextLng", correctValue);
    dispatch(ToggleLanguage( correctValue === "en" ? "en" : "ar"))
    onClose(value);
  };

  return (
    <Dialog sx={{ zIndex: 999999999999 }} onClose={handleClose} open={open}>
      <DialogTitle>اختر اللغه</DialogTitle>
      <List sx={{ pt: 0,width:'400px' }}>
        {languages.map((lang) => (
          <ListItem disableGutters key={lang}>
            <ListItemButton onClick={() => handleListItemClick(lang)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  {lang === 'English' ? <img src={EnglishIcon} alt={lang} /> : <img src={ArbicIcon} alt={lang} /> }
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={lang} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('English');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" sx={{display: 'flex',gap:'.5rem',alignItems:'center',color:'#166b9c'}} onClick={handleClickOpen} component="div">
      <Tooltip
            title="Language"
            arrow 
            placement="top"
            PopperProps={{
              modifiers: [
                {
                  name: 'zIndex',
                  enabled: true,
                  phase: 'main',
                  fn: ({ state }) => {
                    state.styles.popper.zIndex = 99999999999;
                  }
                }
              ]
            }}
          >  <img className='w-10 cursor-pointer' src={LanguageIcon} alt="lang" /> 
          </Tooltip>
      </Typography>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
