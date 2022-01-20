import Link from "next/link"
import { Layout } from "../components/Layout"
import styles from  '../styles/NoEncontrado.module.css'

const NotFound = () => {
    return (
            <div className={styles.noEncontrado}>
                <h1 className="heading">Pagina no encontrada</h1>
                <Link href="/">Volver al inicio</Link>
            </div>
    )
}

export default NotFound
