import React from 'react'
import Container from "../components/Container"
import Infoimg1 from "../assets/infoimg1.png"
import Infoimg2 from "../assets/infoimg2.png"
import Infoimg3 from "../assets/infoimg3.png"


const Information = () => {
  return (
    <section>
        <Container>
           <div className='flex py-[10px]' >
            <div className='w-2/5' >
            <div className='' >
               <img src={Infoimg1} alt='#'/> 
            </div>
            </div>
            <div className='w-2/5' >
             <div className='' >
               <img src={Infoimg2} alt='#'/> 
            </div>
            </div>
            <div className='w-1/5' >
             <div className='' >
               <img src={Infoimg3} alt='#'/> 
            </div>
            </div>
           </div>
        </Container>
    </section>
  )
}

export default Information