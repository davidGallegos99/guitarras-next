import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from  '../styles/Guitarra.module.css'

export const Guitarra = ({
    descripcion,
    imagen,
    precio,
    url,
    nombre
}) => {
    return (
        <div className={styles.guitarra}>
            <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`imagen guitarra - ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}> 
                    <a className={styles.enlace}>Ver producto</a>
                </Link>
            </div>
        </div>
    )
}
