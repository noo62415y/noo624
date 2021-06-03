import React, {useState} from 'react'
import Head from 'next/head'
import {Navbar} from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noo62415yBlog</title>
      </Head>
      <Navbar/>
      <div>
        HelloWorld
      </div>
    </div>
  );
 }