import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Currency from './Currency'
import Text from './Text'

const Wrapper = styled('div')({})

const BarWrapper = styled('div')({
  display: 'flex',
  margin: 15
})

const Detail = styled('div')(({ size, theme, colorKey }) => ({
  flex: size || 1,
  backgroundColor: theme.colors[colorKey] || colorKey,
  height: '15px'
}))

const DataWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.media.tablet]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
}))

const TextWrapper = styled('div')(({ theme, compareColumn, twoColumn }) => ({
  width: '100%',
  [theme.media.tablet]: {
    flex: '1 1 auto',
    width: '33%',
    background:
      !twoColumn || compareColumn
        ? theme.colors.white
        : theme.colors.smallLightGray,
    borderLeft: compareColumn ? `1px solid ${theme.colors.lightGray}` : 'none'
  }
}))

const TextTitleValueWrapper = styled('div')(({ theme, compareColumn }) => ({
  textAlign: 'center',
  lineHeight: '50px',
  borderTop: compareColumn ? 'none' : `1px solid ${theme.colors.lightGray}`,
  marginBottom: 5
}))

const TextTitleValue = styled(Text)({
  lineHeight: '1.5em',
  display: 'inline-block',
  verticalAlign: 'middle'
})

const TitleImgCompare = styled('img')({
  height: 50,
  display: 'inline-block',
  verticalAlign: 'middle'
})

const TextBlock = styled('div')(({ theme }) => ({
  padding: '15px 15px 0px 25px',
  [theme.media.tablet]: {
    padding: '10px 0 25px 20px'
  }
}))

const RoundColor = styled('div')(({ theme, color }) => ({
  display: 'inline-block',
  verticalAlign: 'middle',
  background: theme.colors[color] || color,
  width: 20,
  height: 20,
  borderRadius: '50%',
  marginRight: 15,
  flexShrink: 0
}))

const ValueBlock = styled('div')(({ theme, twoColumn }) => ({
  padding: '10px 15px 20px 60px',
  textAlign: 'left',
  [theme.media.tablet]: {
    padding: twoColumn ? '10px 15px 25px' : '10px 20px 25px',
    textAlign: twoColumn ? 'center' : 'right'
  }
}))

const TextValue = styled(Text)({})

const TextValueCompare = styled(Text)(({ theme, lastValue }) => ({
  color: lastValue ? theme.colors.primary : theme.colors.text
}))

function ExpenseDetails({
  details,
  compareValues,
  currency,
  locale,
  valueTitle,
  compareTitle,
  compareImage
}) {
  return (
    <Wrapper>
      <BarWrapper>
        {details &&
          details.map(detail => (
            <Detail
              key={detail.colorKey}
              size={detail.amount}
              colorKey={detail.colorKey}
            />
          ))}
      </BarWrapper>
      <DataWrapper>
        {valueTitle && (
          <TextWrapper twoColumn={compareValues}>
            <TextTitleValueWrapper />
          </TextWrapper>
        )}
        <TextWrapper twoColumn={compareValues}>
          {valueTitle && (
            <TextTitleValueWrapper>
              <TextTitleValue tag="div" size="typo4">
                {valueTitle}
              </TextTitleValue>
            </TextTitleValueWrapper>
          )}
        </TextWrapper>
        {compareValues && (
          <TextWrapper compareColumn>
            {compareTitle && (
              <TextTitleValueWrapper compareColumn>
                <TextTitleValue
                  compareImage={compareImage}
                  tag="div"
                  size="typo4"
                >
                  {compareTitle}
                  {compareImage && <TitleImgCompare src={compareImage} />}
                </TextTitleValue>
              </TextTitleValueWrapper>
            )}
          </TextWrapper>
        )}
      </DataWrapper>

      {details &&
        details.map((detail, i) => (
          <DataWrapper key={detail.label}>
            <TextWrapper twoColumn={compareValues}>
              <TextBlock key={detail.label}>
                <RoundColor color={detail.colorKey} />
                <Text tag="span" size="typo5">
                  {detail.label}
                </Text>
              </TextBlock>
            </TextWrapper>
            <TextWrapper twoColumn={compareValues}>
              <ValueBlock twoColumn={compareValues} key={detail.label}>
                <TextValue tag="span" size={compareValues ? 'typo4' : 'typo3'}>
                  <Currency
                    value={detail.amount}
                    currency={currency}
                    locale={locale}
                  />
                </TextValue>
              </ValueBlock>
            </TextWrapper>
            {compareValues ? (
              <TextWrapper compareColumn>
                <ValueBlock twoColumn key={i}>
                  <TextValueCompare
                    lastValue={i + 1 === compareValues.length}
                    tag="span"
                    size="typo3"
                  >
                    <Currency
                      value={compareValues[i].amount}
                      currency={currency}
                      locale={locale}
                    />
                  </TextValueCompare>
                </ValueBlock>
              </TextWrapper>
            ) : null}
          </DataWrapper>
        ))}
    </Wrapper>
  )
}

ExpenseDetails.propTypes = {
  /**
   * Details of the expense
   */
  details: PropTypes.arrayOf(
    PropTypes.shape({
      colorKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  ),

  /**
   * comparaison values of the expense
   */
  compareValues: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired
    })
  ),

  /**
   * title above the values
   */
  valueTitle: PropTypes.string,

  /**
   * title above the comparaison values
   */
  compareTitle: PropTypes.string,

  /**
   * Image url above the comparaison values
   */
  compareImage: PropTypes.string,

  /**
   * Currency for price format
   */
  currency: PropTypes.string.isRequired,

  /**
   * locale for price format
   */
  locale: PropTypes.string.isRequired
}

ExpenseDetails.defaultProps = {
  details: []
}

export default ExpenseDetails
