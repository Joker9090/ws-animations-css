import Head from 'next/head'

export default function SandBox() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='SandBox'>
        <section className='Hero'>
          <div className="d-flex justify-content-between">
            <div className='Left'>
              <Hexagono scale={0.5} />
              <Hexagono scale={0.7} />
              <Hexagono scale={0.5} />
            </div>
            <div className='Right'>
              <Hexagono scale={1.5} />
              <Hexagono />
            </div>
          </div>
        </section>
        <section className='Besties'></section>
      </main>
    </>
  )
}

export type HexagonoType = {
  scale?: number
}
export const Hexagono = ({ scale = 1 }: HexagonoType) => {
  return (
    <div className='Hexagono' style={{ transform: `scale(${scale})`}} />
  )
}