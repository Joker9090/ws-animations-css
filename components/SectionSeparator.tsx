
export type SectionSeparatorProps = {
  direction?: "left" | "right",
  miniSize?: number
  style?: any
}
export default function SectionSeparator({ style = {},  direction = "left", miniSize = 100 }: SectionSeparatorProps) {

  const Mini = (<div key="Mini" className="Mini" style={{minWidth: miniSize}} />) 
  const Dynamic = (<div key="Dynamic" className="Dynamic" />) 
  const Anchor = (<div key="Anchor" className="Anchor" />) 
  
  const buildSeparator = () => {
    let parts = []
    // default "left"
    parts = [Mini,Anchor,Dynamic]
    if(direction == "right") parts = [Dynamic,Anchor,Mini]
    return parts;
  }

  return (
    <div className={`SectionSeparator ${direction}`} style={{ ...style }}>
      {buildSeparator()}
    </div>
  )
}