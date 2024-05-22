"use client"
import Script from 'next/script';
import Omise from 'omise';
import React, { useEffect } from 'react';

let OmiseCard : any;

const CheckoutCreditsCard = () => {
   


  const creditCardConfigure = () => {
      OmiseCard.configure({
          defaultPaymentMethod: 'credit_card',
          otherPaymentMethods: []
      })

  }
  const handleClick = (e:any) => {
      e.preventDefault()
      creditCardConfigure()

  }
  const handleLoadScript = () => {
    let OmiseCard = (window as any).OmiseCard
    OmiseCard.configure({
      publicKey: 'pkey_test_5n8w2z5l1k6t3w5n8w2',
      currency: 'thb',
      frameLabel: 'FastWork',
      frameDescription: 'Description',
      submitLabel: 'PAY NOW',
      buttonLabel: 'Pay with Omise',
     

    });
    OmiseCard.configureButton('#credit-card');
    OmiseCard.attach()
}
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.omise.co/omise.js";
    script.onload = handleLoadScript;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  

  return (
    <div>
      <form>
        <button id='credit-card' className='btn' type='button' onClick={(e) => handleClick}>Payment with credit card</button>
      </form>
    </div>
  );
}

export default CheckoutCreditsCard;
