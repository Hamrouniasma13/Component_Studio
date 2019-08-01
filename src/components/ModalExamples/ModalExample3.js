import React from 'react';
import Modal from './../Modal';
import Button from './../Button';
import PropTypes from 'prop-types';

class ModalExample3 extends React.Component {
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
        <Modal isOpen={isOpen} noOverlay={true}>
          <span onClick={this.closeModal}>{children}</span>
        </Modal>
      </>
    );
  }
}

ModalExample3.propTypes = {
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

ModalExample3.defaultProps = {
  noOverlay: false,
  isOpen: false
};

export default ModalExample3;
