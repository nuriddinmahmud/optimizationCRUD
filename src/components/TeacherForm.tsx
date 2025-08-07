import React, { useState, useEffect, useCallback } from 'react';
import type { Teacher } from '../App';

interface TeacherFormProps {
  onSubmit: (teacher: Teacher) => void;
  selected?: Teacher | null;
}

const TeacherForm: React.FC<TeacherFormProps> = React.memo(({ onSubmit, selected }) => {
  const [form, setForm] = useState<Teacher>({
    id: Date.now(),
    name: '',
    age: 0,
    address: '',
    salary: 0,
    phone: '',
  });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm(prev => ({
        ...prev,
        [name]: name === 'age' || name === 'salary' ? +value : value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(form);
      setForm({ id: Date.now(), name: '', age: 0, address: '', salary: 0, phone: '' });
    },
    [form, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      {['ism', 'age', 'address', 'salary', 'phone'].map(key => (
        <input
          key={key}
          name={key}
          type={key === 'age' || key === 'salary' ? 'number' : 'text'}
          placeholder={key[0].toUpperCase() + key.slice(1)}
          value={(form as any)[key]}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {selected ? '🔄 Update Teacher' : `qo'shish`}
      </button>
    </form>
  );
});

export default TeacherForm;
