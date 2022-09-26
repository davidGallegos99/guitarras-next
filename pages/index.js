import { Curso } from "../components/Curso";
import { Layout } from "../components/Layout";
import { Listado } from "../components/Listado";
import { ListadoBlog } from "../components/ListadoBlog";


export default function Home({guitarras,curso, entradas}) 
{
  console.log(entradas);
  return (
      <Layout 
        title="Inicio"
        guitarra={guitarras[8]}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra coleccion</h1>
          <Listado guitarras={guitarras} curso={curso} />
        </main>
        <Curso {...curso}/>
        <section className="contenedor">
          <ListadoBlog result={entradas} />
        </section>
        
      </Layout>
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  
  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras), fetch(urlCursos), fetch(urlBlog)
  ])

  const [guitarras, curso, blog] = await  Promise.all([
    resGuitarras.json(), resCursos.json(), resBlog.json()
  ])

  return {
      props: {
          guitarras,
          curso,
          entradas: blog
      }
  }
}