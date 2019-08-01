/** @jsx jsx */
import { jsx } from '@emotion/core'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import EditPasswordForm from './EditPasswordForm'
import { IllustratedCTA, Modal } from '../..'

const EditPasswordModule = ({ wording, href, onRequestNewPassword }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <IllustratedCTA
        wording={wording.edit_password}
        icon={wording.edit_password.icon}
        href={href}
        onClick={() => !href && setModalOpen(true)}
      />
      {!href && (
        <Modal isOpen={isModalOpen} noPadding overflowVisible>
          <EditPasswordForm
            onBackButton={e => {
              e.preventDefault()
              setModalOpen(false)
            }}
            onSubmitButton={onRequestNewPassword}
            wording={wording.edit_password_modal}
          />
        </Modal>
      )}
    </>
  )
}

export default EditPasswordModule

EditPasswordModule.propTypes = {
  wording: PropTypes.shape({}).isRequired,
  href: PropTypes.string,
  onRequestNewPassword: PropTypes.func,
}
