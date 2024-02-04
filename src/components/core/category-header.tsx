const CategoryHeader = async () => {
  const response = (await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json())) as string[];

  return (
    <div>
      <h1>Category Header</h1>
      <ul>
        {response.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryHeader;
