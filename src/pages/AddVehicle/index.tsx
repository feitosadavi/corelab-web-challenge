/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from '/home/eu/Documents/codelab/corelab-web-challenge/src/pages/AddVehicle/AddVehicle.module.scss'

const onlyFourDigitsAllowed = /\b\d{4}\b/
const onlyAlphabeticAllowed = /^[A-Za-z]+$/
const REQUIRED_FIELD_MSG = 'Campo obrigatório'
const NOT_ALLOWED_NON_ALPHA_MSG = 'Somente letras'
const ONLY_FIVE_NUMERIC_DIGITS_MSG = 'Precisa ter exatamente 5 dígitos númericos'
const AddVehicle = () => {
  const AddVehicleSchema = Yup.object().shape({
    marca: Yup.string().required(REQUIRED_FIELD_MSG),
    cor: Yup.string().matches(onlyAlphabeticAllowed, { message: NOT_ALLOWED_NON_ALPHA_MSG, excludeEmptyString: true }).required(REQUIRED_FIELD_MSG),
    ano: Yup.string().matches(onlyFourDigitsAllowed, { message: ONLY_FIVE_NUMERIC_DIGITS_MSG, excludeEmptyString: true }).required(REQUIRED_FIELD_MSG)
  })

  const onSubmit = (values: any) => console.log({ ...values, ano: Number(values.ano) }) // convert ano into a number

  const { errors, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      marca: '',
      cor: '',
      ano: '',
    },
    validationSchema: AddVehicleSchema,
    onSubmit: onSubmit
  });

  const inputs = [{
    id: 'marca',
    label: 'Marca',
    name: 'marca',
    type: 'text',
    onChange: handleChange,
    value: values.marca
  }, {
    id: 'cor',
    label: 'Cor',
    name: 'cor',
    type: 'text',
    onChange: handleChange,
    value: values.cor
  }, {
    id: 'ano',
    label: 'Ano',
    name: 'ano',
    type: 'text',
    onChange: handleChange,
    value: values.ano
  }]

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            {inputs.map(({ id, label, name, type, onChange, value }) => (<React.Fragment key={id}>
              <label htmlFor={id}>{label}</label>
              <input key={id} id={id} name={name} type={type} onChange={onChange} />
              <sub id={`msg-for-${id}`}>
                {(errors as any)[id]}
              </sub>
            </React.Fragment>))}
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddVehicle