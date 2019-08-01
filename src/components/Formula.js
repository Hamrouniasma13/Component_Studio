import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import SlickSlider from 'react-slick'

import ExpenseDetails from './ExpenseDetails'
import Currency from './Currency'
import Text from './Text'

const Wrapper = styled('div')(({ theme, compareMode }) => ({
  display: compareMode ? 'none' : 'block',
  [theme.media.tablet]: {
    display: 'block'
  },
  backgroundColor: theme.colors.white,
  border: `solid 1px ${theme.colors.lightGray}`
}))

const WrapperMobile = styled('div')(({ theme }) => ({
  margin: '0 5px 20px',
  [theme.media.tablet]: {
    display: 'none'
  },
  backgroundColor: theme.colors.white,
  border: `solid 1px ${theme.colors.lightGray}`
}))

const MobileInnerBlock = styled('div')({
  outline: 'none!important'
})

const TitleWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  background: theme.colors.smallLightGray,
  borderBottom: `solid 1px ${theme.colors.lightGray}`
}))

const MobileTitleWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  background: theme.colors.smallLightGray,
  margin: '0 -15px 30px'
}))

const Amount = styled(Text)(({ theme }) => ({
  color: theme.colors.primary,
  marginLeft: 10
}))

const SliderWrapper = styled('div')(({ theme }) => ({
  [theme.media.tablet]: {
    display: 'none'
  },
  '& .slick-slider .slick-dots li': {
    'button:before': {
      content: '""',
      background: theme.colors.secondary,
      borderRadius: '50%',
      width: 10,
      height: 10
    }
  }
}))

const TextTitleValue = styled(Text)({
  lineHeight: '1.5em',
  display: 'inline-block',
  verticalAlign: 'middle'
})

const TitleImgCompare = styled('img')({
  height: 50,
  display: 'inline-block!important',
  verticalAlign: 'middle'
})

const sliderSettings = {
  dots: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  centerMode: true,
  centerPadding: '10px'
}

function Formula({
  className,
  title,
  amount,
  valueTitle,
  compareTitle,
  details,
  compareValues,
  compareImage,
  currency,
  locale
}) {
  const mobileCompareValue =
    compareValues &&
    details.map((obj, i) => ({
      ...obj,
      ...compareValues[i]
    }))

  return (
    <>
      <Wrapper compareMode={compareValues} className={className}>
        <TitleWrapper>
          <Text tag="span" size="typo3">
            {title}
          </Text>
          {amount ? (
            <Amount size="typo2">
              <Currency value={amount} currency="EUR" locale="fr-FR" />
            </Amount>
          ) : null}
        </TitleWrapper>

        <ExpenseDetails
          details={details}
          compareValues={compareValues}
          currency={currency}
          locale={locale}
          valueTitle={valueTitle}
          compareTitle={compareTitle}
          compareImage={compareImage}
        />
      </Wrapper>
      {compareValues ? (
        <SliderWrapper className={className}>
          <MobileTitleWrapper>
            <Text tag="span" size="typo3">
              {title}
            </Text>
            {amount ? (
              <Amount size="typo2">
                <Currency value={amount} currency="EUR" locale="fr-FR" />
              </Amount>
            ) : null}
          </MobileTitleWrapper>
          <SlickSlider {...sliderSettings}>
            <MobileInnerBlock>
              <WrapperMobile>
                <TitleWrapper>
                  <Text tag="span" size="typo3">
                    {valueTitle}
                  </Text>
                </TitleWrapper>

                <ExpenseDetails
                  details={details}
                  currency={currency}
                  locale={locale}
                />
              </WrapperMobile>
            </MobileInnerBlock>
            <MobileInnerBlock>
              <WrapperMobile>
                <TitleWrapper>
                  {compareTitle && (
                    <TextTitleValue
                      compareImage={compareImage}
                      tag="div"
                      size="typo3"
                    >
                      {compareTitle}
                      {compareImage && <TitleImgCompare src={compareImage} />}
                    </TextTitleValue>
                  )}
                </TitleWrapper>

                <ExpenseDetails
                  details={mobileCompareValue}
                  currency={currency}
                  locale={locale}
                />
              </WrapperMobile>
            </MobileInnerBlock>
          </SlickSlider>
        </SliderWrapper>
      ) : null}
    </>
  )
}

Formula.propTypes = {
  /**
   * Formula name
   */
  title: PropTypes.string.isRequired,

  /**
   * Amount in the title
   */
  amount: PropTypes.number,

  /**
   * Details of the formula
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
Formula.defaultProps = {
  details: []
}

export default Formula
