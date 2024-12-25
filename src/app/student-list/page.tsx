"use client";
// src/app/student-list/page.tsx

import React from 'react';
import TableDisplaySection, { Student } from "@/components/TableSection";
//import PageNavbar from '@/components/PageNavbar';
import SearchBar from '@/components/SearchBar';
import NameofCurrentPage from '@/components/NameOfCurrentPage';
import StudentCard from '@/components/StudentCard';
import StudentCardInfo from '@/components/StudentCardInfo';
import studentData from '@/data/studentData.json';
import { SelectedStudentProvider } from '@/components/SelectedStudentContext';

export default function StudentList() {
  return (
    <SelectedStudentProvider>
    <div>
    <div
    className="grid gap-[0.01rem] p-[0.2rem]  ml-auto w-[93%] h-full   "
    style={{ gridTemplateColumns: '0.65fr 0.35fr', gridTemplateRows: '0.8fr 5.7fr' }}
  > 
    <div className="  h-full pr-[2rem]"><NameofCurrentPage nameOfPage='Student'/><SearchBar/></div>
    <div className="row-span-2 w-full rounded-lg 
 ">
      <StudentCard/><StudentCardInfo/></div>
    <div className="col-span-1 p-1 pr-[2rem] h-full "><TableDisplaySection students={studentData as Student[]}/>
   </div>
  </div></div>
  </SelectedStudentProvider>
  );
}
