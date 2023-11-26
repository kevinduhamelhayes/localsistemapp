import React from 'react';

import useModal from '@/hooks/useModal';
import Link from 'next/link';

export default function LoginModal() {
  const { isOpen, toggleDropdown, ref } = useModal();


  return (
    <div ref={ref} className="top-0 z-50 flex  ">
      <section className="relative z-50 flex  flex-row items-center justify-between bg-slate-900 px-6 ">
        <button className="rounded-xl border-2 border-white bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-600 " type="button" onClick={toggleDropdown}>Login</button>
        {isOpen && (
          <div className="absolute -left-[38vw] top-[20vh] h-[400px] w-[500px] rounded-xl bg-slate-900">
            <div className="flex flex-col gap-1 rounded-xl border-green-500  p-4 text-2xl font-semibold text-white">Log in</div>
            <div className="flex flex-col rounded-xl bg-slate-900 p-8 pt-6">
              <form className="flex flex-col border-green-500 bg-slate-900 text-green-500" onSubmit={toggleDropdown}>
                <input
                  name="email"


                  className="mb-8 rounded-md py-2 text-lg"
                  placeholder="Enter your email"
                  type="text"
                />
                <input
                  name="password"
   
                  className="mb-8 rounded-md py-2 text-lg"
                  placeholder="Enter your password"
                  type="password"
                />
                <div className="flex gap-4  px-1 py-2">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="flex justify-between border-green-500  px-1 py-2 text-green-500"
                  />
                  <label className="flex justify-between border-green-500  px-1 py-2 text-green-500" htmlFor="rememberMe">Remember me</label>
                </div>
                <div className="flex w-full items-end justify-end">
                  <Link href="/home">Forgot password?</Link>
                </div>
                <div className="mt-10 flex w-full items-end justify-evenly rounded-xl ">
                  <button type="button" className=" rounded-md border-2 border-red-500 bg-red-500 px-6 py-3 text-white hover:bg-black" onClick={toggleDropdown}>Close</button>
                  <button type="submit" className="rounded-md border-2 border-green-500 px-6 py-3 hover:bg-green-400 hover:text-black">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
