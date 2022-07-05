import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '.';
import { mockVehicles } from 'types/Vehicle.mock';

export default {
  title: 'Example/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Vechicle = Template.bind({});
const vehicle = mockVehicles()[0]
Vechicle.args = {
  title: 'Card',
  vehicle: {
    name: vehicle.name,
    price: vehicle.price,
    description: vehicle.description,
    year: vehicle.year
  }
};