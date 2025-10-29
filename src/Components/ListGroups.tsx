import { useState } from "react";

function ListGroups() {
  let items = ["San Fransisico", "NewYork", "Tokyo", "London", "Paris"];

  const mountainNames: string[] = [
    // The Seven Summits
    "Mount Everest",
    "Aconcagua",
    "Denali",
    "Mount Kilimanjaro",
    "Mount Elbrus",
    "Vinson Massif",
    "Puncak Jaya",

    // Other Famous Mountains
    "K2",
    "Mount Fuji",
    "Annapurna I",
    "The Matterhorn",
    "Mont Blanc",
    "Mount Rainier",
    "Mount Whitney",
    "Fitz Roy",
  ];

  let [selectindex, setSelectindex] = useState(0);

  let [mountainindex, mountainselectindex] = useState(0);

  const getmessage = () => items.length === 0 && <p>no item found</p>;

  return (
    <>
      <h1>Cities</h1>
      <h2 className="p-3">
        City slected is <b>{selectindex}</b> and name is{" "}
        <b>
          <u>{items[selectindex]}</u>
        </b>
      </h2>

      {getmessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectindex(index)}
          >
            {item}
          </li>
        ))}

        <h1>Mountains</h1>
        <h2 className="p-4">
          Mountain selected is{" "}
          <b>
            {mountainindex} and name is <u>{mountainNames[mountainindex]}</u>
          </b>
        </h2>

        {mountainNames.map((mountainName, index) => (
          <li
            className={
              mountainindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={mountainName}
            onClick={() => mountainselectindex(index)}
          >
            {mountainName}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroups;
