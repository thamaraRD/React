import { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Sailor Moon", "Rugrats"]);

  const handleAddCategory = (onNewValue) => {
    if (
      !categories.some(
        (category) => category.toLowerCase() === onNewValue.toLowerCase()
      )
    ) {
      setCategories([onNewValue, ...categories]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewValue={handleAddCategory} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
