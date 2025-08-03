import Image from 'next/image'
import React from 'react'
export const Header = (props: { brandName: string; routes: { name: string; path: string }[] }) => {
  const routes = props.routes;

  return (
    <header className="fixed top-0 w-full  text-white py-4 px-12 flex justify-between items-center z-50">
      <div className="w-full flex items-center space-x-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <h1 className="text-2xl font-bold">{props.brandName}</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          {routes.map((route) => (
            <li key={route.name} className="group">
              <a className="text-lg font-bold" href={route.path}>
                {route.name}
              </a>
              <div className="h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></div>
            </li>
          ))}

        </ul>
      </nav>
    </header>

  )
}
