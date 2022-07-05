import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from '.';

export default {
  title: 'Example/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Search...',
};

export const Value = Template.bind({});
Value.args = {
  value: 'search value',
};