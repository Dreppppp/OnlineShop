import { CrossIcon } from "@/images/icons";
import { useState } from "react";

export default function SideMenu() {
     const [isOpen, setIsOpen] = useState(false);
    return(
    <>
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          z-[1400]
        `}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-[1500]
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Кнопка закрытия */}
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-black"
          >
            <CrossIcon/>
          </button>
        </div>

        {/* Содержание меню */}
        <nav className="px-4">
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="hover:text-blue-600">Главная</a></li>
            <li><a href="#" className="hover:text-blue-600">Категории</a></li>
            <li><a href="#" className="hover:text-blue-600">Контакты</a></li>
            <li><a href="#" className="hover:text-blue-600">О нас</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};
