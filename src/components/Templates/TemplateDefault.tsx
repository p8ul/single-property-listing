import React, { Fragment } from "react";
import Menu from "../Menu";

export interface IAppProps {
  children: React.ReactNode;
}
const TemplateDefault = ({ children }: IAppProps) => (
  <Fragment>
    <Menu />
    <div className="pusher">{children}</div>
    
  </Fragment>
);

export default TemplateDefault;
