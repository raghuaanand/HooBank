import React from 'react';
import styles from './style';
import { Navbar, Hero,  Stats, Business, Billing, CardDeal, Testimonials,Clients, CTA, Footer } from './components';

const App = () => (

  
  <div className='bg-primary w-full overflow-hidden text-white'>


    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* navbar ends here */}

    {/* `${styles.boxWidth}` ----> Template literals which incoprates javascript expression within the string */}

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* end of hero section */}

    <div className={`bg-primary ${styles.padding} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
)

export default App