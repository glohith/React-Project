import { useState } from "react";

const ListComponent = ({name, shortName, listObject, sendValueToParent}) => {

let [selectindex, setSelectindex] = useState(0);

    return (
        <>
        <h1>{name}</h1>
          <h2 className="p-3">
            {shortName} slected is <b>{selectindex}</b> and name is{" "}
            <b>
              <u>{listObject[selectindex]}</u>
            </b>
          </h2>




          <ul className="list-group">
            {listObject.map((item, index) => (
              <li
                className={
                  selectindex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
               onClick={() => {
                sendValueToParent(listObject[index])
                setSelectindex(index)
            }}
              >
                {item}
              </li>
            ))}
          </ul>
         
        </>
    );

}

export default ListComponent;