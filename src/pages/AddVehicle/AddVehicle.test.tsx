import React from 'react';
import { render, screen } from '@testing-library/react';
import AddVehicle from '.';
import { BrowserRouter } from 'react-router-dom';

describe('AddVehicle component tests', () => {
  const makeSut = () => {
    return (
      <BrowserRouter>
        <AddVehicle />
      </BrowserRouter>
    )
  }

  test('should ano input be in the document', () => {
    render(makeSut());
    const anoInput = screen.getByRole('textbox', { name: /ano/i })
    expect(anoInput).toBeInTheDocument();
  });
  test('should cor input be in the document', () => {
    render(makeSut());
    const corInput = screen.getByRole('textbox', { name: /cor/i })
    expect(corInput).toBeInTheDocument();
  });
  test('should marca input be in the document', () => {
    render(makeSut());
    const marcaInput = screen.getByRole('textbox', { name: /marca/i })
    expect(marcaInput).toBeInTheDocument();
  });
  test('should salvar button be in the document', () => {
    render(makeSut());
    const salvarButton = screen.getByRole('button', { name: /salvar/i })
    expect(salvarButton).toBeInTheDocument();
  });
});
