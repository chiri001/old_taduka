


import '../styles/globals.css';

import React from 'react';

import { Layout } from '../components';

import { Toaster } from 'react-hot-toast';

import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  
    return (
        <StateContext StateContext >
            <Layout>
                <Component {...pageProps} />
                < Toaster />
            </Layout>
        </StateContext>
    )
}

export default MyApp
