import * as React from "react";
import { Header } from "semantic-ui-react";

export interface IAppProps {
  title: string;
  subtitle: string;
}

export default function App({ title, subtitle }: IAppProps) {
  return (
    <Header as="h1" icon className="ui center aligned heading">
      <Header.Subheader>{subtitle}</Header.Subheader>
      {title}
      <br />
      <svg
        version="1.1"
        id="layer_252"
        x="0px"
        y="0px"
        width="65.167px"
        height="11.917px"
        viewBox="0 0 65.167 11.917"
        enableBackground="new 0 0 65.167 11.917"
      >
        <path
          fill="none"
          stroke="#010101"
          strokeWidth="1"
          strokeMiterlimit="3"
          d="M1.045,9.833 9.295,2.083 17.295,9.833
            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "
        />
      </svg>
    </Header>
  );
}
