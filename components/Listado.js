import React from 'react'
import { Guitarra } from './Guitarra'
import styles from  '../styles/Listado.module.css'

export const Listado = ({guitarras,curso}) => {
    return (
        <div className={styles.listado}>
           {
               guitarras.map(guitarra => (
                   <Guitarra 
                        key={guitarra.id}
                        {...guitarra}
                   />
               ))
           }
        </div>
    )
}
