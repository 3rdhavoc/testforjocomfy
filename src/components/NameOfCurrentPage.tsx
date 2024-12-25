import React from "react";


// Define an interface for the object structure
interface PageInfo {
  nameOfPage: string;
}
export default function NameofCurrentPage({nameOfPage}: PageInfo){
    return (
        <div className=' pl-[2rem]'>
            <div className="flex space-x-2 items-start  w-[50%] h-[2.5rem]">
            <button className=""></button> 
            <p className='text-[1.9rem]  h-full  pr-1 pt-0 mt-[0.4rem]'>{nameOfPage}</p>
            </div>
            
                </div>
    )
}