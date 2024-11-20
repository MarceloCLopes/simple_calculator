/* eslint-disable react/prop-types */
import { keyMapping } from "../constants/mapping";

const mappingData = keyMapping.map((data) => Object.entries(data)[0]);

const getButtonClassName = ({ value }) => {
  let className = " h-12 w-12 p-2 rounded-full";
  if (value.colorType === "filled")
    className +=
      " bg-orange-400 text-gray-800 grid place-items-center hover:bg-orange-500 hover:text-white";

  if (value.type === "Result") className += " bg-orange-600";
  if (value.type === Number) className += " hover:bg-gray-500 hover:text-white";
  if (value.colorType === "gray")
    className += " bg-gray-500 text-white hover:bg-gray-700";

  return className;
};

export function Body({ handleClick }) {
  return (
    <div className="grid grid-cols-4 flex-grow text-lg">
      {mappingData.map(([key, value]) => (
        <div
          key={key}
          className="flex justify-center items-center w-full shadow-xl"
        >
          <button
            onClick={handleClick({ key, value })}
            className={getButtonClassName({ key, value })}
          >
            {key}
          </button>
        </div>
      ))}
    </div>
  );
}
