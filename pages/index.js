import Head from "next/head"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="h-full w-full bg-background opacity-90">
      <Head>
        <title>Pawaret Muengkaew | Portfolio</title>
        <meta name="description" content="pawaret.dev" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navbar />
      <div>asd</div>
    </div>
  )
}
