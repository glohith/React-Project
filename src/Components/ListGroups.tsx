import { useState } from "react";
import ListComponent from "./ListComponent";

function ListGroups() {
  let cities = ["San Fransisico", "NewYork", "Tokyo", "London", "Paris"];

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

  const Rivers: string[] = [
  "Ganges",
  "Yamuna",
  "Godavari",
  "Krishna",
  "Narmada",
  "Brahmaputra",
  "Mahanadi",
  "Kaveri",
  "Tapi",
  "Sutlej"
];

let [city, setCity ] = useState('bza')
let [mountain, setMountain] = useState("shastha");
let [river, setRiver] = useState("ganga");

  

  return (
    <>
      <div
        className="row justify-content-center align-items-center g-2"
      >
        <div className="col">
          <h1>My Kids Selected this elements </h1>
          <h2>{city}</h2>
          <h2>{mountain}</h2>
          <h2>{river}</h2>
        </div>

      </div>

      <hr />
      
      <div className="d-flex justify-content-between mb-3">
        <div className="pe-2">
          <ListComponent name="Cities" shortName="City" listObject={cities} sendValueToParent = {setCity} />
          
        </div>
        <div className="ps-2">
          <ListComponent  name="Mountains" shortName="Mountain" listObject={mountainNames} sendValueToParent={setMountain}/>
        </div>

        
      <div className="ps-2">
        <ListComponent name="Rivers" shortName="River" listObject={Rivers} sendValueToParent={setRiver}/>
      </div>
      </div>


      
    </>
  );
}
export default ListGroups;
