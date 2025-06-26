import "./ToggleTheme.css";

export const ToggleTheme = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-theme-container">
      <input
        type="checkbox"
        id="check"
        className="toggle-theme"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"></label>
    </div>
  );
};
