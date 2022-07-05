// Button.spec.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button component tests', () => {
  test('renders without crashing', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} text='button' />);

    const button = screen.getByTestId('btn')
    console.log({ button: button.textContent })
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('button');

    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
});
