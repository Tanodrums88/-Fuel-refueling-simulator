import React from "react";
import { Button, Box, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useRefuelingContext } from "../../store/RefuelingContext";

type PropsHeader = {
  responsive: boolean;
  closeMenu: () => void;
};

function HeaderMenu({ responsive, closeMenu }: PropsHeader) {
  const { refuelingInProgress } = useRefuelingContext();

  let content: React.ReactElement;

  if (!responsive) {
    content = (
      <>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={closeMenu}
            disabled={refuelingInProgress ? true : false}
            sx={{ my: 2, color: "white", display: "block" }}>
            <Link
              to={"/"}
              className="linkMenu">
              Gas Station
            </Link>
          </Button>
          <Button
            onClick={closeMenu}
            disabled={refuelingInProgress ? true : false}
            sx={{ my: 2, color: "white", display: "block" }}>
            <Link
              to={"/register"}
              className="linkMenu">
              Refueling Register
            </Link>
          </Button>
          <Button
            onClick={closeMenu}
            disabled={refuelingInProgress ? true : false}
            sx={{ my: 2, color: "white", display: "block" }}>
            <Link
              to={"/storage"}
              className="linkMenu">
              Storage Tank
            </Link>
          </Button>
        </Box>
      </>
    );
  }

  if (responsive) {
    content = (
      <>
        <MenuItem onClick={closeMenu}>
          <Typography textAlign="center">
            <Link
              to={"/"}
              className="linkMenu">
              Gas Station
            </Link>
          </Typography>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Typography textAlign="center">
            <Link
              to={"/register"}
              className="linkMenu">
              Refueling Register
            </Link>
          </Typography>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Typography textAlign="center">
            <Link
              to={"/storage"}
              className="linkMenu">
              Storage Tank
            </Link>
          </Typography>
        </MenuItem>
      </>
    );
  }
  return content;
}

export default HeaderMenu;
