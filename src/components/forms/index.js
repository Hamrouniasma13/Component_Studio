import React from 'react'
import styled from '@emotion/styled'

import { Form } from 'studio-form'

import InputText from './InputText'
import InputDate from './InputDate'
import InputBirthdate from './InputBirthdate'
import InputSelect from './InputSelect'
import Radios from './Radios'
import Field from './Field'
import Button from '../Button'
import Text from '../Text'

import slugify from 'slugify'

const StyledText = styled(Text.h2)({
  marginTop: 50,
  marginBottom: 30,
})

const MyForm = ({ inline = false, ...rest }) => {
  return (
    <Form
      submitButton={() => {
        return <Button type="submit">Envoyer</Button>
      }}
      components={props => {
        const { uiProperty, property, name } = props

        let childrenProps = {}
        let currentProps = props

        let Child = undefined
        let beforeChild = undefined

        if (property.default) {
          childrenProps.value = property.default
        }

        // assign default props to each component input
        if (uiProperty) {
          if (uiProperty.placeholder) {
            childrenProps.placeholder = uiProperty.placeholder
          }

          if (uiProperty.before) {
            beforeChild = uiProperty.before
          }

          if (uiProperty.Component) {
            Child = uiProperty.Component
          }
        }

        // property: date
        if (property.type === 'date') {
          Child =
            uiProperty && uiProperty.widget === 'birthdate'
              ? InputBirthdate
              : InputDate
          // format the default value before sending to the component
          if (property.default) {
            childrenProps.value = new Date(property.default)
          }
        }

        // property: enum
        if (property.enum) {
          if (uiProperty && uiProperty.enum) {
            childrenProps.options = uiProperty.enum
          } else {
            childrenProps.options = filterOptions(property.enum)
          }

          if (uiProperty && uiProperty.widget === 'select') {
            Child = InputSelect
            // override onChange because studio-form take { name, value } as a parameters
            childrenProps.onChange = e => {
              if (uiProperty.enum) {
                props.onChange({ name, value: e, persist() {} })
              } else {
                props.onChange({ name, value: e.value, persist() {} })
              }
            }

            childrenProps.onBlur = e => {
              if (uiProperty.enum) {
                props.onBlur({ name, value: e, persist() {} })
              } else {
                props.onBlur({ name, value: e.value, persist() {} })
              }
            }
            if (property.default) {
              childrenProps.defaultValue = childrenProps.options.find(
                enu => enu.value === property.default
              )
            }
          } else {
            childrenProps.big = true
            Child = Radios
          }
        }

        if (property.type === 'password') {
          childrenProps.type = 'password'
        }
        // if no child is assigned, use a <InputText />
        if (Child === undefined) {
          Child = InputText
          if (uiProperty && uiProperty.widget === 'textarea') {
            childrenProps.vertical_align = 'top'
            childrenProps.textarea = true
          }
        }
        // assign children props
        currentProps.childrenProps = childrenProps

        return (
          <React.Fragment key={name}>
            {beforeChild ? <StyledText>{beforeChild}</StyledText> : null}
            <Field {...currentProps} inline={inline}>
              <Child />
            </Field>
          </React.Fragment>
        )
      }}
      {...rest}
    />
  )
}

export default MyForm

const filterOptions = vals => vals.map(v => ({ value: slugify(v), label: v }))
