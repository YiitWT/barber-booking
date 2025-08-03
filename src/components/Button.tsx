import React from 'react'

export const Button = (props: any) => {
    return (
        <button className={`px-4 py-2  ${props.bgColor || "bg-amber-500"} text-white rounded hover:bg-blue-600 transition-colors duration-200`}>
            {props.Text}
        </button>
    )
}
