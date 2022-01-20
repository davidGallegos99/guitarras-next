import Entrada from '../components/Entrada';
import { Layout } from '../components/Layout'
import { ListadoBlog } from '../components/ListadoBlog';
import styles from  '../styles/Blog.module.css'


export default function Blog ({result}) {
   console.log(result);
    return (
        <Layout
            title="Blog"
        >
            <main className="contenedor">
                <ListadoBlog  
                    result={result}
                />
            </main>
         </Layout>
    )
}
export async function getServerSideProps() {
    const url = "http://localhost:1337/blogs?_sort=created_at:desc"
    const resp = await  fetch(`${url}`);
    const result = await resp.json();
    console.log(result);
    return {
        props:{
            result
        }
    }
}
