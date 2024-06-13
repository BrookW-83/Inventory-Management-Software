import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="p-2">
      <label for="simple-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-500"
            aria-hidden="true"/>
        </div>
        <input
          type="text"
          id="simple-search"
          className ="border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-3 py-1.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search in Customers..."
          required
        />
      </div>
    </form>
  );
}
