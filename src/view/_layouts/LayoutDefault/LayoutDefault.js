import Head from 'next/head'
import styles from './LayoutDefault.module.css'
import FooterPage from "../../../widgets/FooterPage/FooterPage";
import HeaderPage from "../../../widgets/HeaderPage/HeaderPage";

const LayoutDefault = ({ children }) => (

    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeaderPage />

        { children }

        <FooterPage />
    </div>

)

export default LayoutDefault;
