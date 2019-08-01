/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import { Transition } from 'react-spring'
// import { useTransition } from 'react-spring/hooks'

import Slice from './Slice'
import Text from '../components/Text'
import ServiceCard from '../components/ServiceCard'
import Checkboxes from '../components/forms/Checkboxes'

/**
 * Can't use react springs hooks right now because they're not stable.
 * It causes issues with cards display : some cards that should be hidden are still visible.
 */
// function AnimatedCards({ cards }) {
//   const transitions = useTransition({
//     items: cards,
//     keys: item => item.title + item.category,
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: { duration: 200 }
//   })

//   return transitions.map(({ item, key, props }) => (
//     <ServiceCard {...item} key={key} style={props} />
//   ))
// }

function AnimatedCards({ cards }) {
  return (
    <Transition
      native
      items={cards}
      keys={item => item.key}
      from={{ opacity: 0, y: 10 }}
      enter={{ opacity: 1, y: 0 }}
      leave={{ opacity: 0 }}
      config={{ duration: 200 }}
    >
      {item => ({ opacity, y }) => (
        <ServiceCard
          {...item}
          style={{
            opacity,
            transform: y.interpolate(y => `translate3d(0px,${y}px,0)`)
          }}
        />
      )}
    </Transition>
  )
}

function Filters({ categories, onChange, filterLabel }) {
  const styles = {
    wrapper: {
      marginBottom: '15px'
    },
    label: {
      display: 'inline',
      marginRight: '15px'
    }
  }

  return (
    <div css={styles.wrapper}>
      {filterLabel ? (
        <Text size="typo5" css={styles.label}>
          {filterLabel}
        </Text>
      ) : null}
      <span>
        <Checkboxes
          color="secondary"
          onChange={({ value }) => onChange(value)}
          name="categories"
          options={categories}
        />
      </span>
    </div>
  )
}

/**
 * Get cards that have their category listed in categories.
 * @param {Array} cards
 * @param {Array} categories
 * If categories is empty, return cards
 */
function filterCards(cards = [], categories = []) {
  if (categories.length < 1) return cards
  return cards.filter(card => categories.includes(card.category))
}

export default function ServiceSelector({
  title,
  categories,
  cards,
  filters,
  filterLabel,
  activeCategories: initialActiveCategories
}) {
  const [activeCategories, setActiveCategories] = React.useState(
    initialActiveCategories
  )

  const activeCards = filterCards(cards, activeCategories)

  const theme = React.useContext(ThemeContext)

  const styles = {
    cards: {
      marginLeft: '-15px',
      marginRight: '-15px',

      [theme.media.laptop]: {
        marginLeft: 0,
        marginRight: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
      },

      [theme.media.desktop]: {
        '&:after': {
          content: activeCards.length % 3 === 2 ? '""' : null,
          width: '350px'
        }
      }
    }
  }

  return (
    <Slice title={title}>
      {filters ? (
        <Filters
          filterLabel={filterLabel}
          categories={categories.map(category => ({
            value: category,
            label: category,
            checked: activeCategories.includes(category)
          }))}
          onChange={setActiveCategories}
        />
      ) : null}

      <div css={styles.cards}>
        <AnimatedCards cards={activeCards} />
      </div>
    </Slice>
  )
}

ServiceSelector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  activeCategories: PropTypes.arrayOf(PropTypes.string),
  cards: PropTypes.arrayOf(PropTypes.shape(ServiceCard.propTypes)).isRequired,
  filters: PropTypes.bool
}

ServiceSelector.defaultProps = {
  categories: [],
  cards: [],
  filters: true,
  activeCategories: []
}
