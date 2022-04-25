

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { BsBagCheckFill} from 'react-icons/bs';
import { useRouter } from 'next/router';

import { runComplete } from '../lib/utils';
import { useStateContext } from '../context/StateContext';

const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order,   setOrder] = useState(null);

    useEffect(() => {
        //clear local storage
        localStorage.clear();
        //set cart items to empty and total price back to 0
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runComplete();

    }, []);



    return (
        <div className  ="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2> Thank you for your order!! (Asante)</h2>
                <p className="email-msg" > Check your mail inbox for receipt </p>
                <p className="description" >   
                    Email inquires to  <a className="email" href=""> tadukacustomerservice@gmail.com </a>
                </p>
                <Link href="/">
                    <button type = "button" width = "300px" className = "btn">
                        continue shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success;


