import React, { useEffect, useRef, useState } from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { LuBrain } from "react-icons/lu";
import { CiStickyNote } from "react-icons/ci";
import { LuListTodo } from "react-icons/lu";
import { editNote, putNote } from '@/store/notesSlice';
import { log } from 'console';

interface NoteCategoryDropdownProps {
  idNote: string;
  idCategory?: string
}
const categoryListIcon: Record<number, React.ReactElement> = {
  1: <CiStickyNote />,
  2: <LuListTodo />,
  3: <LuBrain />,
  4: <IoCalendarOutline />
};

export default function DropdownRadio({ idNote, idCategory }: NoteCategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(idCategory);
  const categories = useAppSelector((state) => state.notes.categories);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const noteCategoryList = useAppSelector((state) => state.notes.notes);
  const dispatch = useAppDispatch();

  const categoryIcon = categoryListIcon[Number(selectedCategoryId)];

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (id: string) => {
    setSelectedCategoryId(id);
    const noteToUpdate = noteCategoryList.find((note) => note.id === idNote);
    const selectedCategory = categories.find((cat) => cat.id === id);

    console.log(selectedCategory);
    if (noteToUpdate && selectedCategory) {
      const updatedNote = {
        ...noteToUpdate,
        category: {
          ...noteToUpdate.category,
          id: selectedCategory.id,
          name: selectedCategory.name,
          color: selectedCategory.color,
        },
      }

      dispatch(putNote(updatedNote));
      // dispatch(editNote(updatedNote));
    };
  };

  // 🔒 Fermer le dropdown si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {categoryIcon}
        <svg className="w-2.5 h-2.5 ms-3" fill="none" viewBox="0 0 10 6">
          <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
          <ul className="p-3 space-y-3 text-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <div className="flex items-center">
                  <input
                    id={`cat-${category.id}`}
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selectedCategoryId === category.id}
                    onChange={() => handleSelect(category.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-none focus:ring-blue-500 dark:focus:ring-blue-600"
                  />
                  <label htmlFor={`cat-${category.id}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {category.name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
