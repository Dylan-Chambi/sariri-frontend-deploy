import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import InfoIcon from '@mui/icons-material/Info';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}
      sx= {{
        color: '#fff',
        borderColor: '#fff',
      }}
      >
        <InfoIcon/>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        bgcolor="primary.main"
      >
        <DialogTitle>{"Explicación de los rangos de precios"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" align='center'>
            <h5>$ = Precios hasta 110 </h5>
            <h5>$$ = Precios hasta a 200</h5>
            <h5>$$$ = Precios hasta a 300</h5>
            <h5>$$$$ = Precios hasta a 400</h5>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
