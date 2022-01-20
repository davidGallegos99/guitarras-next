import Image from "next/image";
import React from "react";
import { Layout } from "../../components/Layout";
import styles from  '../../styles/Guitarra.module.css'

const Producto = ({result}) => {
    const { descripcion, imagen, nombre, precio } = result
  return (
    <Layout
        title={nombre}
    >
        <div className={styles.guitarra}>
      <Image
        layout="responsive"
        width={180}
        height={350}
        src={imagen.url}
        alt={`imagen guitarra - ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
      </div>
    </div>
    </Layout>
  );
};

export default Producto;

export async function getServerSideProps({ query: { url } }) {
  const uri = `${process.env.API_URL}/guitarras/?url=${url}`;
  const resp = await fetch(uri);
  const result = await resp.json();
  return {
    props: {
      result: result[0],
    },
  };
}
