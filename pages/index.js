
import Head from 'next/head'
//import React,{Component} from 'react';
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles,{siteTitle} from '../styles/util.module.css'
import {getSortedPostsData} from '../lib/posts'

export async function getStaticProps () {
    const allPostsData=getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
            Hello my name is Jack Chipofya,A 16 year old programmer from Zambia.
        </p>
      </section>
      <div className={utilStyles.recentPosts}>
      <h3>Recent Posts</h3>
      <div>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
            </li>
          ))}
        </ul>
      </section>
      </div>
      </div>
    </Layout>
  )
}
