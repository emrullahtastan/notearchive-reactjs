import Head from 'next/head'
import Content from "./content";
export default function Home() {
    return (
        <div>
            <Head>
                <title>Home | Note Archive</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={"h-max"}>
                <Content/>
            </main>

            <footer>

            </footer>
        </div>
    )
}
