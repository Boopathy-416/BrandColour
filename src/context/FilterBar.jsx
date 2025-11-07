export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between mb-6 bg-gray-50 p-4 rounded-xl shadow-sm">
      <select
        className="border p-2 rounded-md"
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">All Categories</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
      </select>

      <select
        className="border p-2 rounded-md"
        onChange={(e) => setFilters({ ...filters, color: e.target.value })}
      >
        <option value="">All Colors</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Pink">Pink</option>
      </select>

      <select
        className="border p-2 rounded-md"
        onChange={(e) => setFilters({ ...filters, size: e.target.value })}
      >
        <option value="">All Sizes</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>

      <select
        className="border p-2 rounded-md"
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="featured">Featured</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="new">Newest Arrivals</option>
      </select>
    </div>
  );
}
