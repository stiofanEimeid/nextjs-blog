import '../styles/global.css'

export default function App({ Component, pageProps }){
    /*  top-level component
        common across pages
        maintains state
     */
    return <Component {...pageProps} />
}