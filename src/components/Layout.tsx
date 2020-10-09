import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = (props: LayoutProps) => (
  <React.Fragment>
    <Navbar />
    {props.children}
  </React.Fragment>
);
