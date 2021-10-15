
import Layout from '../components/layout'
import styles from '../styles/util.module.css'
export default function Custom404() {
    return (
        <Layout>
        <img src="/images/404.jpeg" style={{styles.pagenotfound}} alt="Even the 404 Image was not found" />
        </Layout>
        )
}
