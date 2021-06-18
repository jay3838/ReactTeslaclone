import React from 'react';
import styled from 'styled-components';
import Section from './Section';


function Home() {
    return (
      <Container>
          <Section  title="Model S"
        description="Order Online for Touchless Delivery"
            backgroundImage="model-s.jpg"
            leftbtntext=" CUSTOM ORDER"
            rightbtntext=" EXISTING INVENTORY "
          />
          <Section title="Model Y"
    description="Order Online for Touchless Delivery"
    backgroundImage="model-y.jpg"
            leftbtntext=" CUSTOM ORDER"
            rightbtntext=" EXISTING INVENTORY "
          />
          <Section title="Model X"
           description="Order Online for Touchless Delivery"
           backgroundImage="model-x.jpg"
            leftbtntext=" CUSTOM ORDER"
            rightbtntext=" EXISTING INVENTORY "
          />
          <Section title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImage="model-3.jpg"
            leftbtntext=" CUSTOM ORDER"
            rightbtntext=" EXISTING INVENTORY "
          />
          <Section title="Solar For New Roofs"
            description="Solar Roof Costs Less Then New Roof Plus Sloar Pannel "
            backgroundImage="solar-roof.jpg"
            leftbtntext=" CUSTOM ORDER"
            rightbtntext=" EXISTING INVENTORY "
          />
          <Section title="Accessories"
            description=""
            backgroundImage="accessories.jpg"
            leftbtntext=" SHOP NOW"
          />
      </Container>
    );
}

export default Home;
const Container = styled.div`
    height:100vh;
`;