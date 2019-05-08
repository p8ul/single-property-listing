import * as React from "react";
import { Grid, Container } from "semantic-ui-react";
import FeatureCard from "./Card";
import Heading from "../common/Heading";
import data from "./data";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <Container fluid className="dull-white" id="feature">
      <Heading title={"Features"} subtitle="Our Features" />
      <Grid stackable className="feature" columns={4}>
        <Grid.Row>
          {data.map(item => {
            return (
              <React.Fragment key={item.image}>
                <FeatureCard
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                />
              </React.Fragment>
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
}
