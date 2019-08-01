/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
// eslint-disable-next-line no-unused-vars
import React, { useContext, Fragment } from 'react'
import { ActionBanner, Slice, FormInfos, ProfilInfoList } from '../../'
import PropTypes from 'prop-types'

const Profile = ({ lists, modules, contributorsList, wording }) => {
  const theme = useContext(ThemeContext)

  const styles = {
    sectionWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      [theme.media.laptop]: {
        flexDirection: 'row',
      },
    },
    infoWrapper: {
      flex: 1,
      flexDirection: 'column',
      [theme.media.laptop]: {
        paddingRight: 10,
      },
    },
    buttonWrapper: {
      flex: 1,
      display: !modules || modules.length === 0 ? 'none' : 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      [theme.media.laptop]: {
        alignItems: 'flex-end',
      },
    },
  }

  return (
    <>
      <ActionBanner title={wording.title} />
      <Slice>
        <div css={styles.sectionWrapper}>
          <div css={styles.infoWrapper}>
            {lists.map(itemInfo => (
              <FormInfos
                key={itemInfo.title}
                title={itemInfo.title}
                infos={itemInfo.list}
                actions={
                  itemInfo.editUrl && [
                    {
                      href: itemInfo.editUrl,
                      icon: 'edit',
                    },
                  ]
                }
              />
            ))}
          </div>
          {modules && modules.length > 0 && (
            <div css={styles.buttonWrapper}>
              {modules.map((ModuleComponent, index) => (
                <Fragment key={index}>{ModuleComponent}</Fragment>
              ))}
            </div>
          )}
        </div>
        {contributorsList && contributorsList.length > 0 && (
          <ProfilInfoList
            slice={false}
            infos={contributorsList}
            tableTitle={wording.contributors_title}
          />
        )}
      </Slice>
    </>
  )
}

export default Profile

Profile.propTypes = {
  wording: PropTypes.shape({}).isRequired,
  contributorsList: PropTypes.array,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      editUrl: PropTypes.string,
      list: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string,
        })
      ),
    })
  ),
  modules: PropTypes.arrayOf(PropTypes.node),
}
