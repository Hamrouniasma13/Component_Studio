/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'

import Text from '../components/Text'
import Button from '../components/Button'

function AccordionItem({ title, content, onSelect, selected }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: { '&:last-child > div': { borderBottomWidth: 1 } },
    label: {
      padding: '15px 0',
      borderWidth: '1px 0',
      borderTopWidth: '1px',
      borderBottomWidth: selected ? 1 : 0,
      borderColor: theme.colors.lightGray,
      borderStyle: 'solid',
      position: 'relative',
      cursor: 'pointer',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    button: {
      position: 'absolute',
      width: 'auto',
      right: '0',
      top: '7px',
      border: '0',
      transition: 'transform 0.2s',
      transform: `rotate(${selected ? '0' : '180deg'})`
    },
    content: {
      transition:
        'padding-top 0.2s, padding-bottom 0.2s, maxHeight 0.3s, opacity 0.1s',
      paddingTop: selected ? 30 : 0,
      paddingBottom: selected ? 20 : 0,
      paddingLeft: 20,
      paddingRight: 20,
      // TODO: animate a better way (resizeObserver to animate the height ?)
      maxHeight: selected ? 1000 : 0,
      opacity: selected ? 1 : 0
    }
  }

  return (
    <div css={styles.wrapper}>
      <div onClick={onSelect} css={styles.label}>
        <Text size="typo5">{title}</Text>
        <Button css={styles.button} icon="up" ghost />
      </div>
      <div css={styles.content}>{content}</div>
    </div>
  )
}

export default function Accordion({ description, items }) {
  const [selectedGroup, setSelectedGroup] = React.useState(-1)

  return (
    <div>
      {description && (
        <Text tag="div" mb={40}>
          {description}
        </Text>
      )}
      {items &&
        items.map &&
        items.map((item, i) => (
          <AccordionItem
            key={i}
            title={item.title}
            content={item.content}
            onSelect={() => setSelectedGroup(selectedGroup === i ? -1 : i)}
            selected={selectedGroup === i}
          />
        ))}
    </div>
  )
}
