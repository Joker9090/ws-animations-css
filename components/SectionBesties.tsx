import React from "react";
import SectionSeparator from "./SectionSeparator";

export default function SectionBesties() {
  const [moved, setMoved] = React.useState(0);
  const [moved2, setMoved2] = React.useState(0);
  const [moved3, setMoved3] = React.useState(0);
  const [shown, setShown] = React.useState(false);
  const [prg, setPrg] = React.useState(0);


  const ref = React.useRef<HTMLDivElement>(null);
  const fixNumber = -170;
  const maxNumber = 160;

  const checkMouse = (e: Event) => {
    if (ref.current) {
      const { isIn, rectSize, globalSize } = isInViewport(ref.current)
      if (isIn) {
        setShown(true)
        setMoved(((rectSize.top * -0.3) < maxNumber) ? rectSize.top * -0.3 : maxNumber)
        setMoved2(rectSize.top * -0.15)
        setMoved3(rectSize.top * -0.1)
      }
    }
  }

  const IncrementPrg = (oldValue:number) => {
    const exValue = oldValue ?? prg
    if(exValue >= 100) return 
    setTimeout(() => {
      setPrg(exValue + 5);
      IncrementPrg(exValue + 5);
    },200)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", checkMouse);
    IncrementPrg(prg)
    return () => {
      window.removeEventListener("scroll", checkMouse);
    }
  }, [])

  function isInViewport(el: HTMLDivElement) {
    const rect = el.getBoundingClientRect();
    return ({
      isIn: (rect.top >= (rect.height * -1) && rect.top <= rect.height),
      rectSize: rect,
      globalSize: { x: document.documentElement.clientHeight, y: document.documentElement.clientWidth }
    });
  }


  return (
    <section className='Besties'>
      <div className="parallax-wrapper" ref={ref}>
        <div className="layer-1"></div>
        <div className="layer-2"></div>
        <div className="content">
          <LoadingBar prg={prg} />
        </div>
        <div className="layer-3">
          <div className={`build-wrapper ${shown ? "shown" : ""}`}>
            <div className={`building-1`} style={{ bottom: (moved + fixNumber) }} />
          </div>
          <div className={`build-wrapper ${shown ? "shown" : ""}`}>
            <div className={`building-2`} style={{ bottom: (moved2 + fixNumber) }} />
          </div>
          <div className={`build-wrapper ${shown ? "shown" : ""}`}>
            <div className={`building-3`} style={{ bottom: (moved3 + fixNumber) }} />
          </div>
        </div>
      </div>
      <SectionSeparator style={{ height: 34, position: "relative", top: -17 }} miniSize={200} direction="right" />
    </section >
  )
}

export const LoadingBar = ({prg} : {prg :number}) => {
  const isCompleted = (prg >= 100)
  return (
    <div className={`LoadingBar ${isCompleted ? "isCompleted" : ""}`}>
      <div className="Bar" style={{ width: prg+"%" }} />
    </div>
  )
} 