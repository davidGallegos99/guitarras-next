import Image from "next/image"
import Link from "next/link"
import { dateFormat } from "../helpers"
import styles from  '../styles/Entrada.module.css'

const Entrada = ({
    id,
    url,
    imagen,
    published_at,
    resumen,
    titulo,
}) => {
    return (
        <article>
            <Image priority="true" layout="responsive" src={imagen.url} width={800} height={600} alt={`imagen blog ${titulo}`} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{dateFormat(published_at)}</p>
                <p className={styles.resumen}>{resumen}...</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>Leer entrada</a>
                </Link>
            </div>
        </article>
    )
}

export default Entrada
