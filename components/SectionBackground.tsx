import React from "react";
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

export default function SectionBackground() {
  return (
    <section className='Background'>
      <BackgroundLogic />

      <div className="container">
        <Carrusel>
          <div className="glide__slide BestieCardContainer">
            <div className="BestieHolder top">
              <BestieCard bestieName="eich" />
              <BestieCard bestieName="jabra" />
              <BestieCard bestieName="barti" />
            </div>
            <div className="BestieHolder bot">
              <BestieCard bestieName="bluyark" />
              <BestieCard bestieName="kalei" />
            </div>
          </div>
          <div className="glide__slide BestieCardContainer">
            <div className="BestieHolder top">
              <BestieCard bestieName="kroku" />
              <BestieCard bestieName="reny" />
            </div>
            <div className="BestieHolder bot">
              <BestieCard bestieName="tekh" />
            </div>
          </div>
        </Carrusel>
      </div>
    </section>
  )
}

export const BestieCard = ({ bestieName }: { bestieName: string }) => {
  return (
    <div className="BestieCard" style={{ backgroundImage: `url("/besties/${bestieName}.png");` }} />
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


export const Carrusel = ({ children }: { children: JSX.Element[] }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    console.log("asdasd")
    if (ref.current) {
      new Glide(
        ref.current,
        {

        }
      ).mount({ Controls, Breakpoints })
    }
  }, [ref])
  return (
    <div className="glide" ref={ref}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>
    </div>
  )
}