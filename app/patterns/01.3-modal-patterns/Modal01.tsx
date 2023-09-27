"use client"

import React, { useState } from 'react'

function Modal01({children}:any) {
    const [shouldShow, setShouldShow] = useState(false)
  return (
    <>
        <button onClick={()=>setShouldShow(true)}>Show Modal Pattern 01</button>
        {shouldShow && <div onClick={()=> setShouldShow(false)} className='fixed left-0 right-0 bg-lime-200 text-blue-600 w-full h-full overflow-auto opacity-60'> 
            <div onClick={e => e.stopPropagation()} className='bg-slate-100 m-10 p-5 w-70'>
                {/* Normally this is an X button */}
                <button onClick={()=>setShouldShow(false)}>Hide Modal</button>
                {children}
            </div>
        </div>}
    </>
  )
}

export default Modal01