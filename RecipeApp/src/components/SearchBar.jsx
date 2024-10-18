const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search Recipes..."
      className="form-control mb-3"
    />
  );
};

export default SearchBar;
