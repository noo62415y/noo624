import React, {useState} from 'react'
import Head from 'next/head'
import {Navbar} from '../components/Navbar'
import {getSortedPostsData} from '../lib/posts'

export async function getStaticProps(){
  const allPostData = getSortedPostsData()
  return {
    props: {
      allPostData
    }
  }
}

export default function Home({allPostData}) {
  return (
    <div>
      <Head>
        <title>Noo62415yBlog</title>
      </Head>
      <Navbar/>
      <div>
        <ul>
          { allPostData.map(({id, date, title})=>(
            <li key={id}>
              {title}
              <br/>
              {id}
              <br/>
              {date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
 }