import React from 'react';
import styles from  '../styles/Curso.module.css'

export const Curso = ({
    titulo,
    contenido, 
    imagen
}) => {
    console.log();
  return (
      <section className={styles.curso}>
          <div className={`contenedor ${styles.grid}`}>
                < div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>
                    <a className={styles.enlace}>Mas Informacion</a>
                </div>
          </div>
          <style jsx>{`
            section {
                padding: 10rem 0;
                margin-top: 10rem;
                background: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.url});
                background-size: cover;
                background-position:50%;
            }
          `}</style>
      </section>
  )
};
