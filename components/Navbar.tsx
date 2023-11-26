/* eslint-disable react/no-array-index-key */

'use client';

import { FaShoppingCart } from 'react-icons/fa';
import useModal from '@/hooks/useModal';
import Link from 'next/link';
import Image from 'next/image';
import LoginModal from '@/components/LoginModal';
import RegisterModal from '@/components/RegisterModal';
import { AiOutlineMenu } from 'react-icons/ai';


function Component() {

  const { isOpen, toggleDropdown, ref } = useModal();

  return (
    <nav className="flex min-h-[80px] w-full flex-row items-center justify-evenly bg-slate-900 text-white">
        <div ref={ref} className="top-0 flex h-10  z-50  bg-slate-900">
      <section className="relative flex h-full w-full flex-row items-center justify-between bg-blue-dark px-10 z-50 bg-slate-900  lg:px-12 ">
        <button type="button" onClick={toggleDropdown}>
          <AiOutlineMenu size={40} color="white" />
        </button>
      </section>
      <section className={`absolute ${isOpen ? 'translate-x-0' : '-translate-x-[100%]'} left-0 top-[80px]
        z-30 flex w-[300px] h-full min-h-screen overflow-y-hidden flex-col rounded-br-xl bg-slate-800  text-white brightness-125 transition-transform duration-300`}
      >
        <Link href="/" className='hover:bg-slate-900'>
          <button type="button" className="flex w-full items-center px-6 py-3 text-xl font-medium" onClick={toggleDropdown}>
            Lista de Precios
          </button>
        </Link>
        <Link href="/about" className='hover:bg-slate-900'>
          <button type="button" className="flex w-full items-center px-6 py-3 text-xl font-medium" onClick={toggleDropdown}>
            Cajas Diarias
          </button>
        </Link>
        <Link href="/services" className='hover:bg-slate-900'>
          <button type="button" className="flex w-full items-center px-6 py-3" onClick={toggleDropdown}>
            <span className="text-xl font-medium">Balances</span>
          </button>
        </Link>
        <Link href="/contact" className='hover:bg-slate-900'>
          <button type="button" className="flex w-full items-center px-6 py-3" onClick={toggleDropdown}>
            <span className="text-xl font-medium">Stock</span>
          </button>
        </Link>
        <Link href="/blogs" className='hover:bg-slate-900'>
          <button type="button" className="flex w-full items-center px-6 py-3 text-xl font-medium" onClick={toggleDropdown}>
            Al panel de Ventas
          </button>
        </Link>
      </section>
  </div>
        <button className="rounded-xl border-2 font-bold px-6 py-3">
              A la venta =>
            </button>
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