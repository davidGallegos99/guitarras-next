import Image from 'next/image';
import React from 'react'
import { Layout } from '../../components/Layout';
import { dateFormat } from '../../helpers';
import styles from  '../../styles/Entrada.module.css'

const {API_URL} = process.env

const EntradaBlog = ({result}) => {
    const {contenido, imagen, published_at,titulo} = result;
     
    return (
        <Layout 
            title={titulo}
        >
            <div className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout='responsive' width={800} height={600} src={imagen.url}/>
                    <div className={styles.contendio}> 
                        <p className={styles.fecha}>{dateFormat(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({query: {url}}) {
    const uri = API_URL
    console.log(url);
    const resp = await  fetch(`${uri}/blogs?url=${url}`);
    const result = await resp.json();
    return {
        props: {
            result:result[0]
        }
    }
}

export default EntradaBlog
