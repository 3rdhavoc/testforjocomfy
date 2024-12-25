import NameofCurrentPage from "@/components/NameOfCurrentPage";
import React from "react";

export default function AddStudents(){
    return (
        <div className="h-full w-full"> 
            <div className="grid gap-[0.01rem] w-full h-full outline"
        style={{ gridTemplateColumns: '0.28fr 0.4fr 0.32fr', gridTemplateRows:'0.1 0.9' }}
      >
       
        <div className="outline h-full w-full col-span-1 ">Second column</div>
        <div className="outline h-full w-full col-span-1">
        <NameofCurrentPage nameOfPage="New Student"/> </div>
        <div className="outline h-full w-full col-span-1">Third Colum</div>
        </div> </div>
    )
}