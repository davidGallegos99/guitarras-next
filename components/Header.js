import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from  '../styles/Header.module.css'

export const Header = ({guitarra}) => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className="contenedor">
               <div className={styles.barra}>
                    <div>
                        <Link href="/">
                            <a>
                                <Image
                                    src="/img/logo.svg"
                                    width={400}
                                    height={100}
                                />
                            </a>
                        </Link>
                    </div>
                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>
               </div>
               {guitarra && (
                   <div className={styles.modelo}>
                       <h2>Modelo {guitarra.nombre}</h2>
                       <p>{guitarra.descripcion.substring(0,250)}</p>
                       <p className={styles.precio}>${guitarra.precio}</p>
                       <Link href={`/guitarras/${guitarra.url}`}><a className={styles.enlace}>
                       Ver producto
                        </a></Link>
                   </div>
               )}
            </div>
            {
                router.pathname == '/' && (
                    <div className={styles.guitarra}>
                        <Image layout='fixed'  width={500} height={1200}  src="/img/header_guitarra.png" alt="guitarra inicio" />
                    </div>
                ) 
            }
        </header>
    )
}
