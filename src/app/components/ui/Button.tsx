import React from 'react'

export default function Button({children, className, ...props}: {children:React.ReactNode, className:string; style? : React.CSSProperties}) {
  return (
 <button className={className} type='button' {...props}>
    {children}
 </button>
  )
}
