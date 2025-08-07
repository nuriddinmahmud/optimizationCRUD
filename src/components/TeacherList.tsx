import React, { useCallback } from 'react';
import type { Teacher } from '../App';

interface TeacherListProps {
  teachers: Teacher[];
  onDelete: (id: number) => void;
  onEdit: (teacher: Teacher) => void;
}

const TeacherList: React.FC<TeacherListProps> = React.memo(({ teachers, onDelete, onEdit }) => {
  const handleDelete = useCallback((id: number) => onDelete(id), [onDelete]);
  const handleEdit = useCallback((teacher: Teacher) => onEdit(teacher), [onEdit]);

  return (
    <div className="space-y-4">
      {teachers.map(t => (
        <div
          key={t.id}
          className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm flex justify-between items-start"
        >
          <div>
            <p><span className="font-semibold">👤 Name:</span> {t.name}</p>
            <p><span className="font-semibold">🎂 Age:</span> {t.age}</p>
            <p><span className="font-semibold">🏠 Address:</span> {t.address}</p>
            <p><span className="font-semibold">💰 Salary:</span> ${t.salary}</p>
            <p><span className="font-semibold">📞 Phone:</span> {t.phone}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => handleEdit(t)}
              className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(t.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default TeacherList;
