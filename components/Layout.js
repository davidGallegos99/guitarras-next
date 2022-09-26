import Head from "next/head"
import { useEffect } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({
    children,
    title,
    guitarra
}) => {
    useEffect(() => {
        console.log('awfawf');
        window.kiteConfig = {
            "host": "kite.wildix.com",
            "src": "static/js/libs/widget.min.js",
            "serialOrPbxName": "motivacloudsk",
            "extension": "222",
            "language": "",
            "autoConnect": false,
            "autoLogin": true,
            "autoLoginName": "ChristianG",
            "autoLoginEmail": "chris.gallegos@motiva.net",
            "askGeolocation": true,
            "askNotification": true,
            "isExpanded": false,
            "expandTimeout": "",
            "openInNewWindow": false,
            "position": "bottom",
            "newDesign": true,
            "hoverTitle": "Chat with us",
            "buttonIcon": "chat",
            "buttonIconColor": "#003e69",
            "bottomOffset": "25px",
            "rightOffset": "25px"
           };
           var t=kiteConfig.host;var n=document.getElementsByTagName("script")[0];var r=document.createElement("script");
           r.async=1;r.setAttribute("charset","utf-8");r.src="https://"+t+"/"+kiteConfig.src;
           r.type="text/javascript";var i=document.createElement("link");i.rel="stylesheet";i.type="text/css";
           i.href="https://"+t+"/static/css/widget.css";n.parentNode.insertBefore(r,n);n.parentNode.insertBefore(i,n)
          
    }, [])
    
    return (
        <div>
            <Head>
                <title>GuitarLa - {title}</title>
                <meta name="description" content="Sitio web de venta de guitarras"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Roboto:ital,wght@0,400;0,700;1,100&display=swap" rel="stylesheet"></link>
                <script>

                </script>
            </Head>
            <Header 
                guitarra={guitarra}
            />

            {children}
            
            <Footer />
           
        </div>
    )
}

