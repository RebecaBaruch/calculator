import type { NextPage } from 'next'
import Calculator from '../src/components/Calculator'
import TextContainer from '../src/components/patterns/TextContainer'
import Link from '../src/components/Link'

const Home: NextPage = () => {
  return (
    <div className={'wrapper'}>
      <TextContainer 
        title={'Calculator in React, Next JS and TS 🚀💻'
      }>
        <p>
          Experience the power of React JS, Next JS, and TS. Build scalable and performant web applications with ease. Enjoy seamless integration, robust development tools, and type safety. Embrace the future of web development.
        </p>

        <Link href='/FetchResult'>
          Fetch test page 🎯
        </Link>
      </TextContainer>
      
      <Calculator />
    </div>
  )
}

export default Home
