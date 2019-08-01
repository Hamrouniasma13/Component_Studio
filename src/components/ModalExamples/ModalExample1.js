import React from 'react';
import Modal from './../Modal';
import Button from './../Button';
import PropTypes from 'prop-types';

class ModalExample1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }
  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return (
      <>
        <Button onClick={this.openModal}>Click me</Button>
        <Modal isOpen={isOpen}>
          <span onClick={this.closeModal}>{children}</span>
        </Modal>
      </>
    );
  }
}

ModalExample1.propTypes = {
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
};

ModalExample1.defaultProps = {
  noOverlay: false,
  isOpen: false
};

export default ModalExample1;
