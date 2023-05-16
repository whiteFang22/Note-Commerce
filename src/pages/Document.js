import React from 'react'
import Nav from '../components/Nav/Nav'
import PdfReader from '../components/PdfReader';

function Document() {

   return (
      <div className='scroll-smooth'>
         <Nav input="1" nav_color="slate-200">
            {/* <Anchor direction="horizontal" offsetTop={85} 
               items={[
                  {
                     key: 'part-1',
                     href: '#part-1',
                     title: 'Part 1',
                  },
                  {
                     key: 'part-2',
                     href: '#part-2',
                     title: 'Part 2',
                  },
                  {
                     key: 'part-3',
                     href: '#part-3',
                     title: 'Part 3',
                  },
                  {
                     key: 'part-4',
                     href: '#part-4',
                     title: 'Part 4',
                  },
                  {
                     key: 'part-5',
                     href: '#part-5',
                     title: 'Part 5',
                  },
                  {
                     key: 'part-6',
                     href: '#part-6',
                     title: 'Part 6',
                  },
               ]}
               className='sticky top-0 z-30 text-black bg-transparent' /> */}
         </Nav> 
         <PdfReader />

      </div>
   )
}

export default Document