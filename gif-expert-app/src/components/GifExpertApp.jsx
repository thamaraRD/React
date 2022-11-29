import PropTypes from 'prop-types';
import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Rugrats']);

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

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

GifExpertApp.PropTypes = {
  title: PropTypes.string.isRequired
};
