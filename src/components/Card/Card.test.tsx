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
  test('should Card display vehicles name', () => {
    render(<Card vehicle={vehicles[0]} title='card_title' />);
    const vehiclesName = screen.getByText(vehicles[0].name)
    expect(vehiclesName).toBeInTheDocument();
  });
  test('should Card display vehicles price', () => {
    render(<Card vehicle={vehicles[0]} title='card_title' />);
    const vehiclesPrice = screen.getByText(vehicles[0].price)
    expect(vehiclesPrice).toBeInTheDocument();
  });
  test('should Card display vehicles description', () => {
    render(<Card vehicle={vehicles[0]} title='card_title' />);
    const vehiclesDescription = screen.getByText(vehicles[0].description)
    expect(vehiclesDescription).toBeInTheDocument();
  });
  test('should Card display vehicles year', () => {
    render(<Card vehicle={vehicles[0]} title='card_title' />);
    const vehiclesYear = screen.getByText(vehicles[0].year)
    expect(vehiclesYear).toBeInTheDocument();
  });
});
