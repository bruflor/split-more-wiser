import { useState } from "react";

const years = {
  value1: "2022",
  value2: "2021",
  value3: "2020",
  value4: "2019",
};

export const ExpensesFilter = (selectedYear: any) => {
  const [filterYear, setFilteryear] = useState(years.value1);
  selectedYear = filterYear;
  const isSelected = (option: any) => {
    setFilteryear(option.target.value);
    // console.log("changing");
  };

  console.log(selectedYear);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={isSelected}>
          <option value={years.value1}>{years.value1}</option>
          <option value={years.value2}>{years.value2}</option>
          <option value={years.value3}>{years.value3}</option>
          <option value={years.value4}>{years.value4}</option>
        </select>
      </div>
    </div>
  );
};
