"use client"; 
// src/context/SelectedStudentContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SelectedStudentContextType {
  selectedStudentId: string | null;
  setSelectedStudentId: (id: string) => void;
}

const SelectedStudentContext = createContext<SelectedStudentContextType | undefined>(undefined);

export const SelectedStudentProvider = ({ children }: { children: ReactNode }) => {
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);

  return (
    <SelectedStudentContext.Provider value={{ selectedStudentId, setSelectedStudentId }}>
      {children}
    </SelectedStudentContext.Provider>
  );
};

export const useSelectedStudent = () => {
  const context = useContext(SelectedStudentContext);
  if (context === undefined) {
    throw new Error('useSelectedStudent must be used within a SelectedStudentProvider');
  }
  return context;
};
