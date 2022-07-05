import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '.';

describe('Search component tests', () => {
  const makeSut = () => (<Search placeholder='placeholder_text' value='search_value' onChange={() => true} />)

  test('should Search be in the document', () => {
    const sut = makeSut()
    render(sut);
    const search = screen.getByTestId('search')
    expect(search).toBeInTheDocument();
  });
  test('should Search display the placeholder passed throught props', () => {
    const sut = makeSut()
    render(sut);
    const placeHolderText = screen.queryByPlaceholderText(/placeholder_text/i)
    expect(placeHolderText).toBeInTheDocument();
  });
});
