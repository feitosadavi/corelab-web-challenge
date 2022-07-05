import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '.';
import userEvent from '@testing-library/user-event';

describe('Search component tests', () => {
  const makeSut = (onChange: () => any) => {

    return (<Search placeholder='placeholder_text' value='search_value' onChange={onChange} />)
  }

  test('should Search be in the document', () => {
    const handleChange = jest.fn()
    const sut = makeSut(handleChange)
    render(sut);
    const search = screen.getByTestId('search')
    expect(search).toBeInTheDocument();
  });
  test('should Search display the placeholder passed throught props', () => {
    const handleChange = jest.fn()
    const sut = makeSut(handleChange)
    render(sut);
    const placeHolderText = screen.queryByPlaceholderText(/placeholder_text/i)
    expect(placeHolderText).toBeInTheDocument();
  });
  test('should Search have the same value passed throught props', () => {
    const handleChange = jest.fn()
    const sut = makeSut(handleChange)
    render(sut);
    const search = screen.getByTestId('search')
    expect(search).toHaveValue('search_value')
  });

  test('should Search trigger handleChange if change event was triggered', () => {
    const handleChange = jest.fn()
    render(makeSut(handleChange));
    const search = screen.getByTestId('search')
    userEvent.type(search, 'some_text')
    expect(handleChange).toHaveBeenCalled()
  });
});
