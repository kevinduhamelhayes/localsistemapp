/* eslint-disable react/no-array-index-key */

'use client';

import { FaShoppingCart } from 'react-icons/fa';
import useModal from '@/hooks/useModal';
import Link from 'next/link';
import Image from 'next/image';
import LoginModal from '@/components/LoginModal';
import RegisterModal from '@/components/RegisterModal';

function Component() {
  const categories = [
    'Electronics',
    'Fashion',
    'Home & Living',
    'Beauty & Health',
    'Sports & Outdoors',
    'Toys & Hobbies',
    'Automobiles',
  ];
  const { isOpen, toggleDropdown, ref } = useModal();

  return (
    <nav className="flex min-h-[80px] w-full flex-row items-center justify-evenly bg-slate-900 text-white">

        <div ref={ref} className="relative gap-6  flex flex-row items-center">
          <div>
          <button type="button" onClick={toggleDropdown} className="justify-end rounded-xl font-bold border-2 border-white px-6 py-3 ">
            Categorías
          </button>
          {isOpen && (
          <ul className="absolute -bottom-14 -left-4 z-20 h-full w-40  text-white bg-black">
            {categories.map((category, index) => (
              <li key={index} className=" bg-black p-2">
                <button type="button" className="w-full px-2 py-1">
                  {category}
                </button>
              </li>
            ))}
          </ul>
          )}
          </div>
          <div>
          <button className="rounded-xl border-2 font-bold px-6 py-3">
              A la venta =>
            </button>
            </div>
        </div>
        <div className="flex w-[60%] flex-row justify-end gap-8 md:w-[60%]">
   

          <div className=" flex flex-row justify-between">
            
            <div className="m-0 flex flex-row items-center justify-center p-0">
              <LoginModal />
              <RegisterModal />
            </div>
          </div>
        </div>

    </nav>
  );
}

export default Component;