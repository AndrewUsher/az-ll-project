import React from 'react'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => (
  <>
    <header className={styles.header}>
      <h1>Pokedex</h1>
    </header>
    {children}
  </>
)

export { Layout }
