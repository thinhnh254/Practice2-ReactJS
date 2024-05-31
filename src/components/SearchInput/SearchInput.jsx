import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 w-full"
        placeholder="Search..."
      />
      <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" />
    </div>
  );
};

export default SearchInput;
