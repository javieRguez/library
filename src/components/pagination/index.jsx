import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex flex-col items-end my-4">
      <span className="mr-8 text-sm text-gray-700 space-x-2">
        <span className="font-semibold">Página</span>
        <span className="font-semibold">{currentPage}</span>
        <span className="font-semibold">de</span>
        <span className="font-semibold">{totalPages}</span>
      </span>
      <div className="space-x-1 inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-900 py-2  hover:bg-sky-800 active::bg-sky-700  hover:cursor-pointer"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-sky-900 py-2  hover:bg-sky-800 active::bg-sky-700  hover:cursor-pointer"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
