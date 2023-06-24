import type { NextPage } from 'next'
import Calculator from '../src/patterns/Calculator'

const Home: NextPage = () => {
  return (
    <div className={'wrapper'}>
      <Calculator />
    </div>
  )
}

export default Home
