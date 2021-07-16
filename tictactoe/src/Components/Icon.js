import React from "react"
import {FaTimes,FaRegCircle,FaPen} from "react-icons/fa"

const Icon = ({choices}) => {
    
    switch (choices) {
        case "cross":
            return <FaTimes />
        case "circle":
            return <FaRegCircle />
        default:
            return <FaPen />
    }
   
}
export default Icon;