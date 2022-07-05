// Button.spec.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '.';

describe('Card component tests', () => {
  const makeSut = () => (<Search placeholder='placeholder_text' value='search_value' onChange={() => true} />)

  test('should Card be in the document', () => {
    const sut = makeSut()
    render(sut);
    const search = screen.getByTestId('search')
    expect(search).toBeInTheDocument();
  });
});
