import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Tell if the element is visible on the screen
 * @param {object} element
 * @param {function} element.getBoundingClientRect
 */
function isInViewPort(element) {
  const viewPort = {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  };

  const bounding = element.getBoundingClientRect();

  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= viewPort.width &&
    viewPort.height - bounding.top >= bounding.height / 3
  );
}

function PositionGetter({ actions, children }) {
  // We should store the element
  const containerRef = createRef();

  // Don't throw another action
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  // On mount
  useEffect(() => {
    const element = containerRef.current;

    function onScroll() {
      // If component is display for the first time
      if (!hasBeenSeen && isInViewPort(element)) {
        actions.map(action => action());
        setHasBeenSeen(true);
        window.removeEventListener('scroll', onScroll);
      }
    }

    window.addEventListener('scroll', onScroll);
    // Call once on first display, scroll is not trigger
    onScroll();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

PositionGetter.propTypes = {
  /**
   * Array of function called when the component is on the screen and visible
   */
  actions: PropTypes.arrayOf(PropTypes.func)
};

PositionGetter.defaultProps = {
  actions: []
};

export default PositionGetter;
