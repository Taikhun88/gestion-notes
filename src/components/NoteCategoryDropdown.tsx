import { useState } from 'react';
import { IoCalendarOutline } from "react-icons/io5";
// import { FcTodoList } from "react-icons/fc";
import { LuBrain } from "react-icons/lu";
import { CiStickyNote } from "react-icons/ci";
import { LuListTodo } from "react-icons/lu";

interface NoteCategoryDropdownProps {
    idCategory?: string
}
// TODO Finir le dropdown avec la boucle
const categoryListIcon: Record<number, React.ReactElement> = {
    1: <CiStickyNote />,
    2: <LuListTodo />,
    3: <LuBrain />,
    4: <IoCalendarOutline />
};

export default function DropdownRadio({ idCategory }: NoteCategoryDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const categoryIcon = categoryListIcon[Number(idCategory)];
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-left">
            <button
                id="dropdownRadioButton"
                onClick={toggleDropdown}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                {categoryIcon}
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    id="dropdownDefaultRadio"
                    className="absolute mt-2 z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                >
                    <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                        <li>
                            <div className="flex items-center">
                                <input
                                    id="default-radio-1"
                                    type="radio"
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 border-none"
                                />
                                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Default radio
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input
                                    defaultChecked
                                    id="default-radio-2"
                                    type="radio"
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Checked state
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input
                                    id="default-radio-3"
                                    type="radio"
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Default radio
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
