
import Layout from '../../components/layout'
import Date from '../../components/date'
import {getAllPostsId,getPostData} from '../../lib/posts'
import utilStyles from '../../styles/util.module.css'
import Head from 'next/head'
export async function getStaticPaths() {
    const paths=getAllPostsId()
    
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({params}) {
    const postData=await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h3 className={utilStyles.headingXl}>{postData.title}</h3>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        
        </Layout>
        )
}