"use client"

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function AnimatedBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Box
      </button>

      <Transition
        show={isOpen}
        as={React.Fragment}
        enter="transform transition-transform duration-1000 ease-in-out"
        enterFrom="translate-y-4 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transform transition-transform duration-1000 ease-in-out"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-4 opacity-0"
      >
        <div className="mt-6 p-6 w-64 h-64 bg-gray-300 rounded">
          Im an animated box!
        </div>
      </Transition>
    </div>
  );
}

export default AnimatedBox;
