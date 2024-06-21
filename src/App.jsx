import React from 'react'
import Hero from './sections/Hero'
import Footer from './sections/Footer';
import PopularProducts from './sections/PopularProducts';
import Services from './sections/Services';
import SpecialOffers from './sections/SpecialOffers';
import SuperQuality from './sections/SuperQuality';
import CustomerReviews from './sections/CustomerReviews';
import Subscribe from './sections/Subscribe';
// import {Hero, Footer, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality, CustomerReviews} from './sections/index.js'; //THIS LINE IS MORE CLEANER BUT IT IS NOT WORKING FOR ME
import Nav from './components/Nav';

const App = () => {

  console.log(CustomerReviews);
  return (
  <main className = 'relative'>
    <Nav />
    <section className = 'xl:padding-l wide:padding-r padding-b'>
      <Hero/>
    </section>
    <section className = 'padding'>
      <PopularProducts/>
    </section>
    <section className = 'padding'>
      <SuperQuality/>
    </section>
    <section className = 'padding-x py-10'>
      <Services/>
    </section>
    <section className = 'padding'>
      <SpecialOffers/>
    </section>
    <section className = 'bg-pale-blue padding'>
      <CustomerReviews/>
    </section>
    <section className = 'padding-x sm:py-32 py-16 w-full'>
      <Subscribe/>
    </section>
    <section className = 'bg-black padding-x padding-t pb-8'>
      <Footer/> 
    </section>
    
  </main>
  )
}

export default App