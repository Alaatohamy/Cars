
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


const Search = () => {
  return (
    <form className="flex w-full lg:w-2/5 md:ml-0" action="#" method="GET">
    <label htmlFor="search-field" className="sr-only">
      Search
    </label>
    <div className="relative my-4 w-full focus-within:text-gray-600">
      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
      </div>
      <input
        id="search-field"
        className="block bg-gray-100 w-full h-full rounded-lg border-transparent py-2 pl-14 text-yellow placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
        placeholder="Search or Type"
        type="search"
        name="search"
      />
    </div>
  </form>
  )
}

export default Search;