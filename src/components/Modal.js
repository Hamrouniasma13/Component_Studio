import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const ModalWrapper = styled('div')(({ isOpen }) => ({
  visibility: isOpen ? 'visible' : 'hidden',
  opacity: isOpen ? '1' : '0',
  zIndex: 1000,
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0,0,0, 0.5)',
  transition: isOpen
    ? 'visibility 0s ease 0s, opacity 0.3s ease 0s'
    : 'visibility 0s ease 0.3s, opacity 0.3s ease 0s',
}))

const ModalInner = styled('div')(
  ({
    isOpen,
    noOverlay,
    noPadding,
    overflowVisible,
    theme: { colors, media },
  }) => ({
    visibility: isOpen ? 'visible' : 'hidden',
    opacity: isOpen ? '1' : '0',
    boxShadow: noOverlay ? '0 5px 40px rgba(0,0,0,.16)' : 'none',
    zIndex: 2000,
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    padding: noPadding ? 0 : '40px',
    overflow: overflowVisible ? 'visible' : 'auto',
    background: colors.white,
    transition: isOpen
      ? 'visibility 0s ease 0s, opacity 0.3s ease 0s'
      : 'visibility 0s ease 0.3s, opacity 0.3s ease 0s',
    [media.tablet]: {
      width: 'inherit',
      height: 'inherit',
      maxHeight: '600px',
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
    },
  })
)

const Modal = ({
  children,
  isOpen,
  className,
  noOverlay,
  onOverlayClick,
  noPadding,
  overflowVisible,
}) => {
  const bodyOverflow = isOpen && !noOverlay ? 'hidden' : 'inherit'

  document.querySelector('body').style.overflow = bodyOverflow

  return (
    <>
      {!noOverlay && <ModalWrapper onClick={onOverlayClick} isOpen={isOpen} />}
      <ModalInner
        className={className}
        isOpen={isOpen}
        noOverlay={noOverlay}
        noPadding={noPadding}
        overflowVisible={overflowVisible}
      >
        {children}
      </ModalInner>
    </>
  )
}

Modal.propTypes = {
  /**
   * is the Modal open
   */
  isOpen: PropTypes.bool,

  /**
   * remove the Modal's overlay
   */
  noOverlay: PropTypes.bool,

  /**
   * Method fired on click on the overlay (same as close Modal normally)
   */
  onOverlayClick: PropTypes.func,

  /**
   * the Modal's children
   */
  children: PropTypes.node,

  /**
   * Modal className for overwrite style
   */
  className: PropTypes.string,

  /**
   * No padding on Modal
   */
  noPadding: PropTypes.bool,

  /**
   * Overflow is visible
   */
  overflowVisible: PropTypes.bool,
}

Modal.defaultProps = {
  noOverlay: false,
  isOpen: false,
  noPadding: false,
  overflowVisible: false,
}

export default Modal
