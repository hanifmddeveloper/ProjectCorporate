import React from 'react'
import Container from '../components/Container'
import Ad1 from "../assets/ad1.png"
import Ad2 from "../assets/ad2.png"
import Ad3 from "../assets/ad3.png"



const Ads = () => {
  return (
   <section>
    <Container>
     <div className='flex py-[30px]' >
        <div className='mr-5' >
            <a href='#'><img src={Ad1} alt='#'/></a>
        </div>
        <div className='' >
         <div className='mb-5' >
            <a href='#'><img src={Ad2} alt='#'/></a>
        </div>
        <div className='' >
            <a href='#'><img src={Ad3} alt='#'/></a>
        </div>
        </div>
     </div>
    </Container>
   </section>
  )
}

export default Ads