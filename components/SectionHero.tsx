import SectionSeparator from "./SectionSeparator"
import Rive, { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import { useEffect, useState } from "react";

export default function SectionHero() {
  return (
    <section className='Hero'>

      <div className="d-flex flex-1 content">
        <RiveContainer name="new_file_2" />
      </div>

      <div className="d-flex justify-content-between mb-auto p-absolute overflow-hidden w-100 h-100">
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

      <SectionSeparator style={{ height: 34 }} miniSize={200} />
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

export const RiveContainer = ({ name }: { name: string }) => {
  const animations = ["idle", "bouncing", "broken", "windshield_wipers"];
  const [animationPosition, setAnimationPosition] = useState(0)

  const { rive, RiveComponent } = useRive({
    src: `/rive/${name}.riv`,
    animations: animations[animationPosition],
    autoplay: false,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });


  const toggleAnimation = () => {
    if(animationPosition == animations.length - 1) setAnimationPosition(0)
    else setAnimationPosition(animationPosition + 1)
  }

  useEffect(() => {
    rive?.play(animations[animationPosition])
    // rive?.play(["idle",animations[animationPosition]])
  },[animationPosition])
  
  return (
    <div className="RiveContainer" onClick={toggleAnimation}>
      <RiveComponent
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  )
}