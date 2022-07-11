/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from '/home/eu/Documents/codelab/corelab-web-challenge/src/pages/AddVehicle/AddVehicle.module.scss'
import { addVehicle } from 'lib/api'
import { useNavigate } from 'react-router-dom'

const onlyFourDigitsAllowed = /\b\d{4}\b/
const onlyAlphabeticAllowed = /^[A-Za-z]+$/
const REQUIRED_FIELD_MSG = 'Campo obrigatório'
const NOT_ALLOWED_NON_ALPHA_MSG = 'Somente letras'
const ONLY_FIVE_NUMERIC_DIGITS_MSG = 'Precisa ter exatamente 5 dígitos númericos'

const AddVehicle = () => {
  const navigate = useNavigate()

  const AddVehicleSchema = Yup.object().shape({
    name: Yup.string().required(REQUIRED_FIELD_MSG),
    brand: Yup.string().required(REQUIRED_FIELD_MSG),
    description: Yup.string(),
    plate: Yup.string().required(REQUIRED_FIELD_MSG),
    price: Yup.number(),
    color: Yup.string()
      .matches(onlyAlphabeticAllowed, { message: NOT_ALLOWED_NON_ALPHA_MSG, excludeEmptyString: true })
      .required(REQUIRED_FIELD_MSG),
    year: Yup.string()
      .matches(onlyFourDigitsAllowed, { message: ONLY_FIVE_NUMERIC_DIGITS_MSG, excludeEmptyString: true })
      .required(REQUIRED_FIELD_MSG)
  })

  const onSubmit = async (values: any) => {
    const payload = await addVehicle(values)
    console.log(payload)
    if (payload.id) navigate('/home')
    else console.error('Houve um erro ao adicionar um novo carro')
  }

  const { errors, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: '',
      brand: '',
      color: '',
      year: '',
      plate: '',
      description: '',
      price: 0,
    },
    validationSchema: AddVehicleSchema,
    onSubmit: onSubmit
  });

  const inputs = [{
    id: 'name',
    label: 'Name',
    name: 'name',
    type: 'text',
    onChange: handleChange,
    value: values.name
  }, {
      id: 'brand',
    label: 'Marca',
    name: 'brand',
    type: 'text',
    onChange: handleChange,
    value: values.brand
  }, {
      id: 'price',
      label: 'Preço',
      name: 'price',
      type: 'number',
      onChange: handleChange,
      value: values.price
    }, {
      id: 'color',
      label: 'Cor',
    name: 'color',
    type: 'text',
    onChange: handleChange,
      value: values.color
    }, {
    id: 'year',
    label: 'Ano',
    name: 'year',
    type: 'text',
    onChange: handleChange,
      value: values.year
    }, {
      id: 'plate',
      label: 'Placa',
      name: 'plate',
      type: 'text',
      onChange: handleChange,
      value: values.plate
  }]

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            {inputs.map(({ id, label, name, type, onChange, value }) => (<React.Fragment key={id}>
              <label htmlFor={id}>{label}</label>
              <input key={id} id={id} name={name} type={type} value={value} onChange={onChange} />
              <sub id={`msg-for-${id}`}>
                {(errors as any)[id]}
              </sub>
            </React.Fragment>))}
            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={values.description}
              cols={30}
              rows={10}>{values.description}</textarea>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddVehicle