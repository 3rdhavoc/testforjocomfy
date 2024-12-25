"use client";
import React from "react";
import { useSelectedStudent } from '@/components/SelectedStudentContext';
import studentData from '@/data/studentData.json';

const StudentCardInfo: React.FC = () => {
    const { selectedStudentId } = useSelectedStudent();
  
    if (!selectedStudentId) {
      return <div className="flex justify-center items-center h-full">
      <p>Please select a student.</p>
    </div>
    }
  
    const student = studentData.find((s) => s.id === selectedStudentId);
    if (!student) {
      return <div>Student not found.</div>;
    }
    return (
        <div className=" bg-[#fafaf9]  mt-[0.2rem]  h-[50%] 
     overflow-y-scroll overflow-x-hidden pb-5  ">
                <div>
                    <p className="text-[0.8rem] text-[#555753] font-medium 
                    pl-3 pt-4">Subject Performance</p>
                    <div className="w-[100%] h-[10rem]"></div>
                    <div className="text-end"><p className="
                    pr-[4rem] text-[0.8rem]">View all</p></div>
                </div>
                <div className="grid grid-cols-2 ">
  <div className=" p-4">
    <p className="text-[0.8rem] text-[#555753] font-medium"> Personal Info</p>
    <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]"> Name</p>
    <p className="text-[0.9rem] font-medium">{student.name}</p>
    <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]">Gender</p>
    <p className="text-[0.9rem] font-medium">{student.gender} </p>
    <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]">MedicalCondition</p>
    {student.medicalCondition.map((complication, index)=> (
    <p className="text-[0.9rem] font-medium" key={index}>{complication.description}</p>
  ))}
    <p className="text-[0.8rem] text-[#555753] font-medium">Financial Info</p>
    <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]">Balance left</p>
    <p>
       

    </p>
    <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]">Last Transactions</p>
 
    
  </div>

  <div className=" p-4">
    <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]">Date of Birth</p>
    <p className="text-[0.9rem] font-medium">{student.dateOfBirth}</p>
    <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]">Student ID</p>
    <p className="text-[0.9rem] font-medium">{student.id}</p>
    <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]">Home Address</p>
    <p className="text-[0.9rem] font-medium">{student.homeAddress}</p>
    
      </div>
      </div>
    <div className=" w-full text-[0.7rem] 
    text-[#555753] font-bold pl-1 pr-1 ">
      <table className="min-w-full ">
        <thead>
          <tr>

        <th className=" text-start  ">Method</th>
        <th className="text-start pl-6 whitespace-nowrap ">Transaction Id</th>
        <th className="text-start pl-6  " >Amount</th>
        <th className="text-start pl-6">Date</th>
        </tr>
        </thead>
        <tbody>
        {student.fees.previousTransactions.map((transaction, index) =>(
          <tr key={index} className={`${index % 2 ? '':'bg-[#F68400] text-black'}`}>
       
        <td className="text-start  whitespace-nowrap "> Mobile Money</td>             
        <td className="text-start pl-6">{transaction.transactionId}</td>
        <td className="text-start pl-6">{transaction.amountPaid}</td>
        <td className="text-start pl-6">{transaction.date}</td>
        </tr>
        ))}
        </tbody>
    </table>
    <div className="col-span-2 mt-2">
      <p className="text-end pr-[2rem]">View all</p></div>
    </div> {student.parentInfo.map((contactInfo, index)=>(
    <div className=" grid grid-cols-2 gap-4 mt-[2rem]">
   
    <div className="  ml-5" key={index}>
      
        <p className="text-[0.8rem] text-[#555753] font-medium">Contact Info</p>
        <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]">Parent Info</p>
        <p className="text-[0.9rem] font-medium">{contactInfo.name}</p>
        <p className="text-[0.8rem] text-[#555753] mt-[0.5rem]">Email</p>
        <p className="text-[0.9rem] font-medium ">{contactInfo.email}</p>
 
    </div>  
   
    <div className="mr-5">
        <p className="text-[0.8rem] text-[#555753] ">Phone Number</p>
        <p className="text-[0.9rem] font-medium">{student.parentInfo[0].phoneNumber}</p>
    </div>  
    </div>))}

        </div>
    )
    
}
export default StudentCardInfo;