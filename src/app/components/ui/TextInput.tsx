import React from 'react'

export type InputProps = {
    parentClassName?:string;
    className:string;
    children? : React.ReactNode;
    name : string;
    placeholder?  :string
}
export default function TextInput({className, parentClassName,  children, ...props} : InputProps) {
  return (
    <div className={parentClassName}>
<input type='text' className={className} {...props}/>
{children}
    </div>
  )
}
