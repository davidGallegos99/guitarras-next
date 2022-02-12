import Head from "next/head"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({
    children,
    title,
    guitarra
}) => {
    return (
        <div>
            <Head>
                <title>GuitarLa - {title}</title>
                <meta name="description" content="Sitio web de venta de guitarras"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Roboto:ital,wght@0,400;0,700;1,100&display=swap" rel="stylesheet"></link>
            </Head>
            <Header 
                guitarra={guitarra}
            />

            {children}
            
            <Footer />
        </div>
    )
}
