/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-unnecessary-act */

import React from 'react';
import { render, screen } from '@testing-library/react';
import AddVehicle from '.';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';


describe('AddVehicle component tests', () => {
  const makeSut = () => {
    return (
      <BrowserRouter>
        <AddVehicle />
      </BrowserRouter>
    )
  }

  const getInput = (name: string): HTMLElement => {
    return screen.getByLabelText(new RegExp(`${name}`, 'i'))
  }

  test('should description input be in the document', () => {
    render(makeSut());
    expect(getInput('descrição')).toBeInTheDocument();
  });
  test('should insert values on description input', async () => {
    render(makeSut())
    const inputEl = getInput('descrição');
    await act(async () => {
      userEvent.type(inputEl, "any_description");
    })
    expect(getInput('descrição')).toHaveValue("any_description");
  })

  // ANO
  test('should year input be in the document', () => {
    render(makeSut());
    const anoInput = getInput('ano')
    expect(anoInput).toBeInTheDocument();
  });
  test('should insert values on year input', async () => {
    render(makeSut())
    const inputEl = getInput('ano');
    await act(async () => {
      userEvent.type(inputEl, '2022');
    })
    expect(getInput('ano')).toHaveValue('2022');
  })
  test('should return a error msg if user types values with length smaller or bigger than 5 digits', async () => {
    render(makeSut())
    const inputEl = getInput('ano');
    await act(async () => {
      userEvent.type(inputEl, '123');
    })
    expect(screen.getAllByText('Precisa ter exatamente 5 dígitos númericos')).toBeTruthy()
    await act(async () => {
      userEvent.type(inputEl, '123456');
    })
    expect(screen.getAllByText('Precisa ter exatamente 5 dígitos númericos')).toBeTruthy()
  })

  // COLOR
  test('should color input be in the document', () => {
    render(makeSut());
    const colorInput = getInput('cor')
    expect(colorInput).toBeInTheDocument();
  });
  test('should insert values on color input', async () => {
    render(makeSut())
    const inputEl = getInput('cor');
    await act(async () => {
      userEvent.type(inputEl, 'Vermelho');
    })
    expect(getInput('cor')).toHaveValue('Vermelho');
  })
  test('should return a error msg if user types non alphabetic values', async () => {
    render(makeSut())
    const inputEl = getInput('cor');
    await act(async () => {
      userEvent.type(inputEl, 'vermelho123');
    })
    expect(screen.getAllByText('Somente letras')).toBeTruthy()
  })

  // MARCA
  test('should brand input be in the document', () => {
    render(makeSut());
    const anoInput = screen.getByRole('textbox', { name: /marca/i })
    expect(anoInput).toBeInTheDocument();
  });
  test('should insert values on brand input', async () => {
    render(makeSut())
    const inputEl = getInput('marca');
    await act(async () => {
      userEvent.type(inputEl, "any_brand");
    })
    expect(getInput('marca')).toHaveValue("any_brand");
  })

  // PLATE
  test('should plate input be in the document', () => {
    render(makeSut());
    expect(getInput('placa')).toBeInTheDocument();
  });
  test('should insert values on plate input', async () => {
    render(makeSut())
    const inputEl = getInput('placa');
    await act(async () => {
      userEvent.type(inputEl, "any_plate");
    })
    expect(getInput('placa')).toHaveValue("any_plate");
  })

  // PRICE
  test('should price input be in the document', () => {
    const { container } = render(makeSut());
    expect(container.querySelector('input#price')).toBeInTheDocument();
  });
  test('should insert values on price input', async () => {
    const { container } = render(makeSut())
    const inputEl = container.querySelector('input#price')
    await act(async () => {
      userEvent.type(inputEl as Element, '200000');
    })
    const input = container.querySelector('input#price')
    expect(input).toHaveValue(200000);
  })

  // SAVE
  test('should salvar button be in the document', () => {
    render(makeSut());
    const salvarButton = screen.getByRole('button', { name: /salvar/i })
    expect(salvarButton).toBeInTheDocument();
  });
  test('should not save if required fields has error message', async () => {
    render(makeSut());
    await act(async () => {
      screen.getByRole('button', { name: /salvar/i }).click()
    })
    expect((await screen.findAllByText(/Campo obrigatório/i)).length).toBe(5)
  });
  // test('should save if everything is fine', async () => {
  //   const { container } = render(makeSut());
  //   const nameEl = getInput('name');
  //   const placaEl = getInput('placa');
  //   const brandEl = getInput('marca');
  //   const colorEl = getInput('cor');
  //   const yearEl = getInput('ano');
  //   const priceEl = container.querySelector('input#price')
  //   const descriptionEl = getInput('descrição');
  //   await act(async () => {
  //     userEvent.type(nameEl, "any_name");
  //     userEvent.type(placaEl, "any_placa");
  //     userEvent.type(brandEl, "any_brand");
  //     userEvent.type(colorEl, "any_color");
  //     userEvent.type(yearEl, "any_name");
  //     userEvent.type(priceEl as Element, "200000");
  //     userEvent.type(descriptionEl, "any_description");
  //     screen.getByRole('button', { name: /salvar/i }).click()
  //   })
  //   expect(fetchMock).toHaveBeenCalledWith('skdfdkj')
  //   expect(fetchMock).toHaveBeenCalledTimes(1)
  // });
});
