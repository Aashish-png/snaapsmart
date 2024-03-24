import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => { //layouts always have to export some childern within them 
  return (
    <main className='root'>
        <Sidebar/>
        <MobileNav/>

        <div className='root-container'>
            <div className='wrapper'>
            {children} 
            </div>
        </div>
      
        
        </main>
  )
}

export default Layout