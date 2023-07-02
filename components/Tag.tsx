import React from "react"

interface TagProps{
    label:string
}
const Tag:React.FC<TagProps> = ({label})=>{
    return <div className="bg-white px-2 py-1 rounded-xl text-sm">{label}</div>
}
export default Tag