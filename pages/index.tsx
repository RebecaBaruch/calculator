import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Calculator from '../src/patterns/Calculator'

const Home: NextPage = () => {
  return (
    <div className={'wrapper'}>
      <Calculator />
    </div>
  )
}

export default Home
