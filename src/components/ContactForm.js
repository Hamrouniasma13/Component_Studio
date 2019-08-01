/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import Slice from '../slices/Slice'
import Form from './forms'
import Button from './Button'

function ContactForm({ title, wording, onSendMessage, topicOptions }) {
  const formSchema = {
    type: 'object',
    required: ['topic_type', 'message'],
    properties: {
      topic_type: {
        title: wording.topic_label,
        enum: topicOptions,
      },
      message: {
        title: wording.message_label,
        type: 'string',
      },
    },
  }

  const uiSchema = {
    topic_type: {
      widget: 'select',
      placeholder: wording.topic_placeholder,
    },
    message: {
      widget: 'textarea',
      placeholder: wording.message_placeholder,
    },
  }

  return (
    <Slice title={title}>
      <Form
        formSchema={formSchema}
        uiSchema={uiSchema}
        onSubmit={onSendMessage}
        submitButton={() => (
          <div
            css={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button type="submit">{wording.button_label}</Button>
          </div>
        )}
      />
    </Slice>
  )
}

export default ContactForm

ContactForm.defaultProps = {
  wording: {
    topic_label: '',
    message_label: '',
    message_placeholder: '',
    button_label: '',
  },
  onSendMessage: () => {},
  topicOptions: [],
}

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  wording: PropTypes.shape({
    topic_label: PropTypes.string,
    topic_placeholder: PropTypes.string,
    message_label: PropTypes.string,
    message_placeholder: PropTypes.string,
    button_label: PropTypes.string,
  }),
  onSendMessage: PropTypes.func,
  topicOptions: PropTypes.array,
}
