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


  

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <div className="pe-2">
          <ListComponent name="Cities" shortName="City" listObject={cities}/>
          
        </div>
        <div className="ps-2">
          <ListComponent  name="Mountains" shortName="Mountain" listObject={mountainNames}/>
        </div>

        
      <div className="ps-2">
        <ListComponent name="Rivers" shortName="River" listObject={Rivers}/>
      </div>
      </div>


      
    </>
  );
}
export default ListGroups;
