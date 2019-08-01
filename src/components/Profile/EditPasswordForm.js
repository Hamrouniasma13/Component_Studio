/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import Form from '../forms'
import Button from '../Button'
import ColoredHeaderContainer from '../ColoredHeaderContainer'

function EditPasswordForm({ wording, onBackButton, onSubmitButton }) {
  const formSchema = {
    type: 'object',
    required: ['current_password', 'new_password', 'new_password_confirmation'],
    properties: {
      current_password: {
        title: wording.current_password_label,
        type: 'password',
      },
      new_password: {
        title: wording.new_password_label,
        type: 'password',
      },
      new_password_confirmation: {
        title: wording.new_password_confirmation_label,
        type: 'password',
      },
    },
  }

  const uiSchema = {
    current_password: {
      placeholder: wording.current_password_placeholder,
    },
    new_password: {
      placeholder: wording.new_password_placeholder,
    },
    new_password_confirmation: {
      placeholder: wording.new_password_confirmation_placeholder,
    },
  }

  const styles = {
    buttonWrapper: {
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  }

  return (
    <ColoredHeaderContainer title={wording.title} icon={wording.icon}>
      <Form
        formSchema={formSchema}
        uiSchema={uiSchema}
        onSubmit={(values, errors) => onSubmitButton(values, errors)}
        submitButton={() => (
          <div css={styles.buttonWrapper}>
            <Button ghost onClick={onBackButton}>
              {wording.back_button_label}
            </Button>
            <Button type="submit" color="secondary">
              {wording.confirm_button_label}
            </Button>
          </div>
        )}
        inline
      />
    </ColoredHeaderContainer>
  )
}

export default EditPasswordForm

EditPasswordForm.propTypes = {
  wording: PropTypes.shape({
    title: PropTypes.string,
    back_button_label: PropTypes.string,
    confirm_button_label: PropTypes.string,
  }),
  periodOptions: PropTypes.array,
  onSubmitButton: PropTypes.func,
  onBackButton: PropTypes.func,
}
