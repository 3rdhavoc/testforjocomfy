"use client";
import React from "react";
import { useSelectedStudent } from '@/components/SelectedStudentContext';
import studentData from '@/data/studentData.json';


const StudentCard: React.FC = () => {
    const { selectedStudentId } = useSelectedStudent();
  
    if (!selectedStudentId) {
      return <div></div>;
    }
  
    const student = studentData.find((s) => s.id === selectedStudentId);
    if (!student) {
      return <div>Student not found.</div>;
    }
return (<div className="w-full ">
    <div className="w-[100%] h-[6rem] ml-[0.3rem] bg-[#fafaf9]  rounded-lg flex ">
        <div className="w-[6rem] h-[90%]"></div><div className="mt-3"><p className="
        text-[0.8rem] ">Name</p>
    <p className="mt-[-0.4rem]">{student.name}</p><p className="text-[0.8rem] mt-[-0.2rem]">Class</p>
    <p className="mt-[-0.4rem]">
        {student.class}</p> </div>
    </div>
    <div className='flex  '>
    <div className="w-[50%] h-[4.4rem] bg-[#fafaf9] mt-[0.3rem] ml-[0.3rem] rounded-lg">
        </div><div className="w-[50%] h-[4.4rem] bg-[#fafaf9]  mt-[0.3rem] ml-[0.3rem] rounded-lg">
        </div> </div>
    </div>
)
}
export default StudentCard;