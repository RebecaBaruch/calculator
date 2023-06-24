import type { NextPage } from 'next'
import Calculator from '../src/components/Calculator'
import TextContainer from '../src/components/patterns/TextContainer'

const Home: NextPage = () => {
  return (
    <div className={'wrapper'}>
      <TextContainer 
        title={'Calculator in React, Next JS and TS 🚀💻'
      }>
        Experience the power of React JS, Next JS, and TS. Build scalable and performant web applications with ease. Enjoy seamless integration, robust development tools, and type safety. Embrace the future of web development.
      </TextContainer>
      <Calculator />
    </div>
  )
}

export default Home
