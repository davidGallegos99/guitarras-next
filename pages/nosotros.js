import Image from 'next/image'
import React from 'react'
import { Layout } from '../components/Layout'
import styles from  '../styles/Nosotros.module.css'


export default function Nosotros () {
    return (
        <Layout
            title="Nosotros"
        >
            <main className="contenedor">
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                        <Image layout='responsive' src="/img/nosotros.jpg" width={600} height={450}  />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae commodi ut nisi quo repudiandae minima sed et vitae assumenda quas. Totam praesentium, excepturi debitis et quas qui omnis delectus iste dolorem laudantium, dolores, maiores incidunt suscipit aperiam voluptas saepe ducimus velit in. Rerum necessitatibus suscipit voluptatibus fugit repudiandae sed nisi quo dolores, placeat error officiis corporis vero vel quam voluptatum inventore aut odit, nemo repellendus optio consequuntur, incidunt cumque itaque. </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae commodi, Ea beatae, saepe iste quae sunt ducimus earum fugiat aliquam. Aut quisquam pariatur earum est, aperiam, doloremque delectus aliquid nisi provident iste nesciunt. Rerum similique, fuga accusantium aspernatur eius hic!</p>
                    </div>
                </div>
            </main>
         </Layout>
    )
}
