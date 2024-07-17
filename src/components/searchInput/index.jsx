import { InputCustom } from "..";

const SearchInput = ({
  options = {
    setQueryTerm,
    handleSearchInput,
    queryTerm,
  },
}) => {
  return (
    <div className="max-w-md">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <InputCustom
          options={{
            placeholder: "Busca por nombre de libro...",
            handleChange: (e) => options.setQueryTerm(e.target.value),
            value: options.queryTerm,
          }}
        />
        <button
          onClick={() => options.handleSearchInput()}
          className="text-white absolute end-0 bottom-0 bg-sky-600 py-2 px-4 text-sm rounded data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
