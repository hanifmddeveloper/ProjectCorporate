import React, { useContext } from 'react'
import Container from "./Container"
import {ApiData} from "../components/ContextApi"
import Slider from 'react-slick'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "slick-carousel/slick/slick.css";


function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="absolute right-[9px] top-[50%] w-[40px] h-[40px] leading-[40px] text-center rounded-full translate-y-[-50%] cursor-pointer z-[1] bg-[gray]"
      onClick={onClick}
    > <GrFormPrevious className='inline-block' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[9px] top-[50%] w-[40px] h-[40px] leading-[40px] text-center rounded-full translate-y-[-50%] cursor-pointer z-[1] bg-[gray]"
      onClick={onClick}
    > <MdNavigateNext className='inline-block' />
    </div>
  );
}


const NewArrival = () => {
let data = useContext(ApiData)
  console.log(data);




 var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
     prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
   
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
   <section>
    <Container>
      <h2 className='font-dm text-[39px] font-bold text-[#262626]' >New Arrivals</h2>
      <Slider {...settings}>
      {data.map((item)=>(
      <div className=' grid-cols-2 lg:grid-cols-3 py-[100px] ' >
        <div className='' >
        <a href='#'><img src={item.thumbnail} alt=''/></a> 
           <h1>{item.id}</h1>
           <h1 className='font-dm font-bold text-[16px]' >{item.title}</h1>   
           <h1 className='text-red-600' >{item.price}</h1>   
           <h1 className='text-blue-500' >{item.description}</h1>   
        </div>  
       </div>
       ))}
       </Slider> 
    
    </Container>
   </section>
   </>
 )
}
export default NewArrival