import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Information from '../components/Information'
import Ads from '../components/Ads'
import NewArrival from '../components/NewArrival'
import BestSellers from '../components/BestSellers'
import Ads2 from '../components/Ads2'
import SpecialOffers from '../components/SpecialOffers'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
     <Header />
     <Navbar />
     <Banner />
     <Information />
     <Ads />
     <NewArrival />
     <BestSellers />
     <Ads2 />
     <SpecialOffers />
     <Footer />
   
    </>
  )
}

export default Home