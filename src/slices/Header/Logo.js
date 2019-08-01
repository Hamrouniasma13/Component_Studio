import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import Link from '../../components/Link'

function Logo({ src, alt, width, height, to }) {
  const styles = {
    link: {
      height,
      width,
      display: 'block'
    },
    img: {
      height: '100%',
      maxWidth: '100%'
    }
  }
  return (
    <Link href={to} css={styles.link}>
      <img src={src} alt={alt} css={styles.img} />
    </Link>
  )
}

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  to: PropTypes.string
}

Logo.defaultProps = {
  height: '60px',
  alt: 'Logo',
  to: '/'
}

export default Logo
