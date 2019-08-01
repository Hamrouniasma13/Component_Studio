import media from './theme/media'

const h1 = {
  fontSize: '26px',
  lineHeight: '1.2em',
  fontWeight: 600,

  [media.tablet]: {
    fontSize: '30px',
    letterSpacing: '0.02em',
    lineHeight: '1.15em',
  },

  [media.laptop]: {
    fontSize: '36px',
  },
}

const h2 = {
  fontSize: '20px',
  letterSpacing: '1',
  lineHeight: '1.2em',
  fontWeight: 600,

  [media.tablet]: {
    fontSize: '22px',
    letterSpacing: '0.8px',
  },

  [media.laptop]: {
    fontSize: '24px',
  },
}

const h3 = {
  fontSize: '18px',
  letterSpacing: '0.2px',
  lineHeight: '1.2em',
  fontWeight: 600,

  [media.laptop]: {
    fontSize: '20px',
  },
}

// equivalent for PH (Pragraph Highlight)
const h4 = {
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '1.5em',
}

// equivalent for (P)
const paragraph = {
  fontSize: '16px',
  fontWeight: 400,
  letterSpacing: '0.3px',
  lineHeight: '1.4em',
}

// equivalent for small text (ST)
const smallText = {
  color: '#8F8F90',
  fontSize: 14,
}

// equivalent for LINK
const link = {
  fontSize: 14,
}

// equivalent of BIG NUMBER
const bigNumber = {
  fontSize: 40,
  lineHeight: '40px',
  fontWeight: 'bold',
}

const legend = {
  fontSize: 12,
  fontWeight: 'bold',
}

export default {
  h1,
  h2,
  h3,
  h4,
  paragraph,
  smallText,
  link,
  legend,
  bigNumber,

  h5: paragraph,
  h6: paragraph,
  div: paragraph,
  p: paragraph,
  span: paragraph,

  typo1: h1,
  typo2: h2,
  typo3: h3,
  typo4: h4,
  typo5: paragraph,
  typo6: smallText,
  typo7: link,
  typo8: bigNumber,
}
