import React from 'react'
import styled from '@emotion/styled'
import Modal from './../Modal'
import Button from './../Button'
import PropTypes from 'prop-types'

const CustomModal = styled(Modal)({
  background: 'pink',
  position: 'relative',
  top: 'inherit!important',
  left: 'inherit!important',
  transform: 'none!important',
  display: 'inline-block',
  verticalAlign: 'middle',
  padding: '15px',
  margin: '0 0 0 50px',
  maxWidth: '100px'
})

class ModalExample4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  toggleModal() {
    this.setState(prev => ({
      isOpen: !prev.isOpen
    }))
  }
  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const { children } = this.props
    const { isOpen } = this.state

    return (
      <>
        <Button onClick={this.toggleModal}>Click me</Button>
        <CustomModal isOpen={isOpen} noOverlay={true}>
          <span onClick={this.closeModal}>{children}</span>
        </CustomModal>
      </>
    )
  }
}

ModalExample4.propTypes = {
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Modal className for overwrite style
   */
  className: PropTypes.string
}

ModalExample4.defaultProps = {
  noOverlay: false,
  isOpen: false
}

export default ModalExample4
