import React from 'react';

import useModal from '@/hooks/useModal';

export default function RegisterModal() {
  const { isOpen, toggleDropdown, ref } = useModal();



  return (
    <div ref={ref} className="top-0 z-50 flex  ">
      <section className="relative z-50 flex  flex-row items-center justify-between bg-slate-900 px-6 ">
        <button
          className="rounded-xl border-2 border-white bg-slate-300 px-6 py-3
        font-semibold text-black 
         hover:text-white"
          type="button"
          onClick={toggleDropdown}
        >
          Register
        </button>
        {isOpen && (
          <div className="absolute -left-[45vw] top-[16vh] h-[400px] w-[500px] rounded-xl bg-slate-900">
            <div className="flex flex-col gap-1 rounded-xl border-green-500 bg-slate-900 p-4 text-2xl font-semibold text-white">Register</div>
            <div className="flex flex-col rounded-xl bg-slate-900 p-8 pt-6">
              <form className="flex flex-col border-green-500 bg-slate-900 text-green-500" onSubmit={toggleDropdown}>

                <input
                  name="name"

                  className="mb-8 rounded-md py-2 text-lg"
                  placeholder="Enter your name"
                  type="text"
                />
                <input
                  name="lastname"

                  className="mb-8 rounded-md py-2 text-lg"
                  placeholder="Enter your lastname"
                  type="text"
                />
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

                />

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
