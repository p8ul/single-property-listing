import * as React from "react";
import { Grid, Header, Image } from "semantic-ui-react";

export interface IAppProps {
  image: string;
  title: string;
  subtitle?: string;
}

export const Card = ({ image, title, subtitle }: IAppProps) => {
  return (
    <Grid.Column>
      <div className="feature__card">
        <Header as="h2" icon textAlign="center">
          <Image className="feature__card__image" src={image} />
          <Header.Content>{title}</Header.Content>
          <Header.Subheader>{subtitle}</Header.Subheader>
        </Header>
      </div>
    </Grid.Column>
  );
};

export default Card;
