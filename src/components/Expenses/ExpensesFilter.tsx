import "./ExpensesFilter.css";
interface IValues {
  selectValue: any[];
  handle: (e: React.ChangeEvent) => void;
  label: string;
}
export const ExpensesFilter = ({ selectValue, handle, label }: IValues) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>{label}</label>
        <select onChange={handle}>
          {selectValue.map((value: any) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
