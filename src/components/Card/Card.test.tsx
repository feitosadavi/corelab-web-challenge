// Button.spec.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card component tests', () => {
  test('should Card be in the document', () => {
    render(<Card children={'children'} title='card_title' />);
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument();
  });
  test('should Card display the title passed throught props', () => {
    render(<Card children={'children'} title='card_title' />);
    const cardTitle = screen.getByText('card_title')
    expect(cardTitle).toBeInTheDocument();
  });
});
