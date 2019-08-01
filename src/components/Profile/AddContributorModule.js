/** @jsx jsx */
import { jsx } from '@emotion/core'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddContributorForm from './AddContributorForm'
import { IllustratedCTA, Modal } from '../..'

const AddContributorModule = ({ wording, href, onAddNewContributor }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <IllustratedCTA
        wording={wording.add_contributor}
        icon={wording.add_contributor.icon}
        href={href}
        onClick={() => !href && setModalOpen(true)}
      />
      {!href && (
        <Modal isOpen={isModalOpen} noPadding overflowVisible>
          <AddContributorForm
            onBackButton={e => {
              e.preventDefault()
              setModalOpen(false)
            }}
            onSubmitButton={onAddNewContributor}
            wording={wording.add_contributor_modal}
          />
        </Modal>
      )}
    </>
  )
}

export default AddContributorModule

AddContributorModule.propTypes = {
  wording: PropTypes.shape({}).isRequired,
  href: PropTypes.string,
  onAddNewContributor: PropTypes.func,
}

AddContributorModule.defaultProps = {
  href: '',
  onAddNewContributor: () => {},
}
