import { useState } from "react";

export default initialVal => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (index, e) => {
    if (index === undefined) {
      setValue(e.target.value);
      return;
    }

    const updatedIngredients = value.map((ingredient, i) => {
      if (index === i)
        return { ...ingredient, name: e.target.value };
      else
        return { ...ingredient };
    });
  console.log('original vale', value)
  console.log('updatedIngredients vale', updatedIngredients)

    setValue(updatedIngredients);
  };
  const reset = () => {
    setValue([]);
  };

  return [value, handleChange, reset];
};
