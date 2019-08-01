/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import ColoredHeaderContainer from '../ColoredHeaderContainer'
import Form from '../forms'
import Button from '../Button'

function AddContributorForm({ wording, onBackButton, onSubmitButton }) {
  const formSchema = {
    type: 'object',
    required: ['firstName', 'surname', 'emailAddress', 'role'],
    properties: {
      firstName: {
        title: wording.firstname_label,
        type: 'string',
      },
      surname: {
        title: wording.surname_label,
        type: 'string',
      },
      emailAddress: {
        title: wording.email_label,
        type: 'string',
      },
      role: {
        title: wording.role_label,
        enum: ['Admin', 'Viewer', 'Super admin'],
      },
    },
  }

  const uiSchema = {
    firstName: {
      placeholder: wording.firstname_placeholder,
    },
    surname: {
      placeholder: wording.surname_placeholder,
    },
    emailAddress: {
      placeholder: wording.email_placeholder,
    },
    role: {
      placeholder: wording.role_placeholder,
      widget: 'select',
      enum: [
        { label: 'Admin', value: '1' },
        { label: 'Viewer', value: '2' },
        { label: 'Super user', value: '3' },
      ],
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
    <ColoredHeaderContainer icon={wording.icon} title={wording.title}>
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
      />
    </ColoredHeaderContainer>
  )
}

export default AddContributorForm

AddContributorForm.propTypes = {
  wording: PropTypes.shape({
    title: PropTypes.string,
    back_button_label: PropTypes.string,
    confirm_button_label: PropTypes.string,
  }),
  periodOptions: PropTypes.array,
  onSubmitButton: PropTypes.func,
  onBackButton: PropTypes.func,
}
