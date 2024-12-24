// src/app/student-list/layout.tsx
import React from 'react';


export default function AddStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full h-full bg-[#1E1E1E]
     relative min-h-screen p-0 overflow-hidden '>
    <div className='w-[96%] h-[98%] bg-white p-0 rounded-[1rem] m-auto'>





 
    <div className="w-[81rem] h-[40rem]   rounded-xl rounded-tr-[1rem] rounded-br-[1rem] ml-auto mr-[0.5rem] mt-[0.5rem] mb-8  p-0">
     
  {children} 
    </div></div></div>
  );
}
  