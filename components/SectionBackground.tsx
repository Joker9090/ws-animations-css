import React from "react";

export default function SectionBackground() {
  return (
    <section className='Background'>
      <BackgroundLogic />
    </section>
  )
}

export const BackgroundLogic = () => {
  const ParentRef = React.useRef<HTMLDivElement>(null);
  const LineRef = React.useRef<HTMLDivElement>(null);

  const fixSize = () => {
    if (LineRef.current && ParentRef.current) {
      LineRef.current.style.backgroundSize = (ParentRef.current.clientWidth * 1.5) + "px"
    }
  }

  React.useEffect(() => {
    if (LineRef.current && ParentRef.current) {
      window.addEventListener("resize", fixSize)
      fixSize()
    }
    return () => {
      window.removeEventListener("resize", fixSize)
    } 
  }, [LineRef, ParentRef])

  return (
    <div className="Background-Logic">
      <div className="Background-Pattern" ref={ParentRef} />
      <div className="Background-Progressive-Line" >
        <div className="Background-Progressive-Child" ref={LineRef} />
      </div>
    </div>
  )
}
