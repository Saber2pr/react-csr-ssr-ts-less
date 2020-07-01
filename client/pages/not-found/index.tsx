import React from 'react'

// @ts-ignore
import styles from './style.less'

export interface NotFound {}

export const NotFound = ({}: NotFound) => {
  return <div className={styles.NotFound}>NotFound</div>
}
