/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import Form from './forms'
import Button from './Button'
import Text from './Text'
import Icon from './Icon'

function CallbackFormModal({
  wording,
  periodOptions,
  onBackButton,
  onSubmitButton,
}) {
  const theme = useContext(ThemeContext)

  const formSchema = {
    type: 'object',
    required: ['period', 'phone_number'],
    properties: {
      phone_number: {
        title: wording.phone_number_label,
        type: 'string',
      },
      period: {
        title: wording.period_label,
        enum: periodOptions,
      },
    },
  }

  const uiSchema = {
    phone_number: {
      placeholder: wording.phone_number_placeholder,
    },
    period: {
      widget: 'select',
      placeholder: wording.topic_placeholder,
    },
  }

  const styles = {
    wrapper: {
      width: '100%',
      maxWidth: '768px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headerWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 80,
      backgroundColor: theme.colors.primary,
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    },
    title: {
      color: theme.colors.white,
    },
    formWrapper: {
      padding: 40,
    },
    buttonWrapper: {
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.headerWrapper}>
        <Icon name="call" color="white" size="30px" css={{ marginRight: 20 }} />
        <Text tag="h3" css={styles.title}>
          {wording.title}
        </Text>
      </div>
      <div css={styles.formWrapper}>
        <Text tag="div" mb={25}>
          {wording.description}
        </Text>
        <Form
          formSchema={formSchema}
          uiSchema={uiSchema}
          onSubmit={values => onSubmitButton(values)}
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
      </div>
    </div>
  )
}

export default CallbackFormModal

CallbackFormModal.defaultProps = {
  wording: {
    title: '',
    description: '',
    phone_number_label: '',
    phone_number_placeholder: '',
    period_label: '',
    back_button_label: '',
    confirm_button_label: '',
  },
  periodOptions: [],
  onSubmitButton: () => {},
  onBackButton: () => {},
}

CallbackFormModal.propTypes = {
  wording: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.node,
    description_bold: PropTypes.string,
    phone_number_label: PropTypes.string,
    phone_number_placeholder: PropTypes.string,
    period_label: PropTypes.string,
    back_button_label: PropTypes.string,
    confirm_button_label: PropTypes.string,
  }),
  periodOptions: PropTypes.array,
  onSubmitButton: PropTypes.func,
  onBackButton: PropTypes.func,
}
