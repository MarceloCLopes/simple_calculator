/* eslint-disable react/prop-types */
export function Header({ calculation }) {
  return (
    <header className="text-right bg-orange-700 text-white p-8 text-2xl">
      <div>{calculation.input.join("") || 0}</div>
      <div>{calculation.result || 0}</div>
    </header>
  );
}
