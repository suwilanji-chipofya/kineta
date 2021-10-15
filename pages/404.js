
import Layout from '../components/layout'
import utilStyles from '../styles/util.module.css'
export default function Custom404() {
    return (
        <Layout>
        <img src="/images/404.jpeg" style={{utilStyles.pagenotfound}} alt="Even the 404 Image was not found" />
        </Layout>
        )
}
