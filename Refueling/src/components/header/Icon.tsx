import React from "react";
import { Typography } from "@mui/material";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";

type PropsHeader = {
  responsive: boolean;
};

function Icon({ responsive }: PropsHeader) {
  let icon: React.ReactElement;

  if (responsive) {
    icon = (
      <>
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}>
          <OilBarrelIcon />
        </Typography>
      </>
    );
  }

  if (!responsive) {
    icon = (
      <>
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}>
          <OilBarrelIcon />
        </Typography>
      </>
    );
  }
  return icon;
}

export default Icon;
