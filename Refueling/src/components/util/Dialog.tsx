import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DialogConfirm({ state }: { state: boolean }) {
  const [open, setOpen] = useState<boolean>(state);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/register");
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title">
          Payment made successfully!
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            The refueling has been saved in the system log. Go to the "Refueling
            Register" tab to see all the refuelings carried out
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
