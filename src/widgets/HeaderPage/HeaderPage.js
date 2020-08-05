import styles from './HeaderPage.module.css'

const HeaderPage = () => {

    return (
        <header className={styles.container}>
            <h1 className="title">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
        </header>
    )
}

export default HeaderPage