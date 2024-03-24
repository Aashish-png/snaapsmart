import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => { //layouts always have to export some childern within them 
  return (
    <main className='auth'>{children} </main>
  )
}

export default Layout