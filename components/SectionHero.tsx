import SectionSeparator from "./SectionSeparator"

export default function SectionHero() {
  return (
    <section className='Hero'>
      <div className="d-flex justify-content-between mb-auto">
        <div className='Left'>
          <Hexagono scale={1.1} />
          <Hexagono scale={1.3} />
          <Hexagono scale={1.2} />
        </div>
        <div className='Right'>
          <Hexagono scale={2.0} />
          <Hexagono />
        </div>
      </div>
      <SectionSeparator style={{height: 34}} miniSize={200} />
    </section>
  )
}

export type HexagonoType = {
  scale?: number
}
export const Hexagono = ({ scale = 1 }: HexagonoType) => {
  return (
    <div className='Hexagono' style={{ transform: `scale(${scale})` }} />
  )
}