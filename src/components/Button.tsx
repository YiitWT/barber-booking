import React from 'react'

export const Button = (props: any) => {
    return (
        <button className={`px-4 py-2  ${props.bgColor || "bg-amber-500"} text-white rounded hover:bg-amber-600 hover:-translate-y-1 transition-all duration-200 font-bold`}>
            {props.Text}
        </button>
    )
}
