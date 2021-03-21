import React from "react";
import { Drawer, Grid } from "@material-ui/core";
import { SideBarStyle } from "./SideBar.style";

interface Props {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}

export const SideBar = ({ open, close, children }: Props) => {
  const classes = SideBarStyle();

  return (
    <Drawer
      anchor={"right"}
      open={open}
      onClose={close}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {children}
    </Drawer>
  );
};
