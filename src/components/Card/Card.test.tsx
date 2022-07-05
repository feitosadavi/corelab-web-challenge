// Button.spec.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';
import { mockVehicles } from 'types/Vehicle.mock';

describe('Card component tests', () => {
  const vehicles = mockVehicles()
  test('should Card be in the document', () => {
    render(<Card vehicle={vehicles[0]} title='card_title' />);
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument();
  });
  test('should Card display vehicles price', () => {
    render(<Card vehicle={vehicles[0]} title='card_title' />);
    const vehiclesPrice = screen.getByText(vehicles[0].price)
    expect(vehiclesPrice).toBeInTheDocument();
  });
});
