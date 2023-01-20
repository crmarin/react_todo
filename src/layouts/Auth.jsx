import React from 'react';
import { Outlet } from 'react-router-dom';

// components

// views
export default function Auth() {
  return (
    <>
      <main>
        <section className="relative h-full min-h-screen w-full py-40">
          <div
            className="bg-full absolute top-0 h-full w-full bg-gray-800 bg-no-repeat"
          ></div>
          <Outlet />
        </section>
      </main>
    </>
  );
}
