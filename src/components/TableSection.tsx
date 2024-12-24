"use client";
import React from "react";
import { useSelectedStudent } from "./SelectedStudentContext";


// Define the Student interface
export interface Student {
  id: string;
  name: string;
  class: string;
  gender: string;
  medicalCondition: { description: string}[];
  homeAddress: string;
  dateOfBirth: string;
  academics: {
    subjects: {
      name: string;
      scores: {
        classwork: number;
        assignments: number;
        exams: number;
      };
    }[];
  };
  fees: {
    amountPaid: number;
    previousTransactions: {
      date: string;
      amountPaid: string | number;
      transactionId: string;
    }[];
  };
  parentInfo: {
    name: string;
    phoneNumber: string;
    email: string;
  }[];
}


// Define the EachLine component
const EachLine: React.FC<{ student: Student;  selectedStudentId: string | null }> = ({ student, selectedStudentId }) => {
  const { setSelectedStudentId } = useSelectedStudent();

  const handleRowClick = (id: string) => {
    
    setSelectedStudentId(id);};
  return (
    <tr  className={`hover:shadow-lg hover:shadow-orange-300 hover:bg-opacity-50 hover:bg-orange-300 transition-all cursor-pointer 
    ${selectedStudentId === student.id ? 'bg-[#F68400] text-white ' : ''}`} onClick={() => handleRowClick(student.id)} >
      <td className="py-4 text-start pl-4 w-20">{student.id}</td>
      <td className="py-4 text-start w-60">{student.name}</td>
      <td className="py-4 text-start w-28">{student.class}</td>
      <td className="py-4 text-start w-28">{student.academics.subjects[0]?.scores.exams}</td>
      <td className="py-4 text-start w-36">{1000 - student.fees.amountPaid}</td> 
    </tr>
  );
};

// Define the parent component to render the list of students
const StudentList: React.FC<{ students: Student[]; selectedStudentId: string | null}> = ({ students, selectedStudentId }) => {
  return (
    <tbody className="text-[0.9rem]">
      {students.map((student) => (
        <EachLine key={student.id} student={student} selectedStudentId={selectedStudentId} /> // Correctly applying the key to each child
      ))}
    </tbody>
  );
};

interface TableDisplaySectionProps {
  students: Student[];
}

// Render the StudentList component with the imported students data
const TableDisplaySection: React.FC<TableDisplaySectionProps> = ({ students }) => {
  const { selectedStudentId } = useSelectedStudent();

  return (
    <div className="w-[100%] h-[30.8rem] bg-[#fafaf9]  mt-1 rounded-lg overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="text-[#71717a] text-[0.9rem]">
          <tr>
            <th className="py-2 text-start pl-4 font-normal w-10">ID</th>
            <th className="py-2 text-start font-normal w-20">Name of Students</th>
            <th className="py-2 text-start font-normal w-28">Class</th>
            <th className="py-2 text-start font-normal w-28">Avg Score</th>
            <th className="py-2 text-start font-normal w-36">Fees Balance</th>
          </tr>
        </thead>
        <StudentList students={students} selectedStudentId={selectedStudentId} />
      </table>
    </div>
  );
};

export default TableDisplaySection;
