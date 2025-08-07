import React, { useState, useCallback } from 'react';
import TeacherForm from './components/TeacherForm';
import TeacherList from './components/TeacherList';

export interface Teacher {
  id: number;
  name: string;
  age: number;
  address: string;
  salary: number;
  phone: string;
}

const App: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [editing, setEditing] = useState<Teacher | null>(null);

  const handleSubmit = useCallback((teacher: Teacher) => {
    setTeachers(prev => {
      const exists = prev.find(t => t.id === teacher.id);
      return exists
        ? prev.map(t => (t.id === teacher.id ? teacher : t))
        : [...prev, teacher];
    });
    setEditing(null);
  }, []);

  const handleDelete = useCallback((id: number) => {
    setTeachers(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleEdit = useCallback((teacher: Teacher) => {
    setEditing(teacher);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Teacher CRUD </h1>
        <TeacherForm onSubmit={handleSubmit} selected={editing} />
        <TeacherList teachers={teachers} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default App;
