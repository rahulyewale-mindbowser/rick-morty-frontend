import React from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate =useNavigate();
    const [open, setOpen] = React.useState(true);

    const handleYes = () => {
       localStorage.removeItem('user');
        setOpen(false);
        navigate('../')
        
      };
    
      const handleNo = () => {
        setOpen(false);
        navigate('../')
        
      };
  return (
    <div>
        <Dialog
        open={open}
        onClose={() => {
          setOpen(true);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are You sure to Logout?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleNo}>No</Button>
          <Button onClick={handleYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Logout