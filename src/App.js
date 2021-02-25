import { useState } from "react";
import classNames from "classnames";
import Header from "./header/Header";
import Pets from "./pets/Pets";
import Dashboard from "./dashboard/Dashboard";
import Scanner from "./scanner/Scanner";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const visitedPets = [
    {
      id: 0,
      name: "Lussy",
      type: "cat",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
      entered_at: "20th Dec 2020, 9:00 am",
      exited_at: "20th Dec 2020, 11:00 am",
    },
    {
      id: 1,
      name: "Lussy",
      type: "dog",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
      entered_at: "20th Dec 2020, 9:00 am",
      exited_at: "20th Dec 2020, 11:00 am",
    },
    {
      id: 2,
      name: "Lussy",
      type: "cat",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
      entered_at: "20th Dec 2020, 9:00 am",
      exited_at: "20th Dec 2020, 11:00 am",
    },
    {
      id: 3,
      name: "Lussy",
      type: "dog",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
      entered_at: "20th Dec 2020, 9:00 am",
      exited_at: "20th Dec 2020, 11:00 am",
    },
    {
      id: 4,
      name: "Lussy",
      type: "cat",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
      entered_at: "20th Dec 2020, 9:00 am",
      exited_at: "20th Dec 2020, 11:00 am",
    },
    {
      id: 5,
      name: "Lussy",
      type: "other",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
      entered_at: "20th Dec 2020, 9:00 am",
      exited_at: "20th Dec 2020, 11:00 am",
    },
    {
      id: 6,
      name: "Lussy",
      type: "dog",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
      entered_at: "20th Dec 2020, 9:00 am",
      exited_at: "20th Dec 2020, 11:00 am",
    },
  ];

  const [pets, setPets] = useState([
    {
      id: 0,
      name: "Lussy",
      type: "cat",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
    },
    {
      id: 1,
      name: "Lussy",
      type: "dog",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
    },
    {
      id: 2,
      name: "Lussy",
      type: "cat",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
    },
    {
      id: 3,
      name: "Lussy",
      type: "dog",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
    },
    {
      id: 4,
      name: "Lussy",
      type: "cat",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
    },
    {
      id: 5,
      name: "Lussy",
      type: "other",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
    },
    {
      id: 6,
      name: "Lussy",
      type: "dog",
      date_of_birth: "21st Dec 2017",
      owner_name: "Hardik Panchal",
      owner_mobile: "8530305299",
      address:
        "A 602, Yemen Heights, Versova road, Vastral, Ahemdabad - 382415",
    },
  ]);

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "dashboard" && <Dashboard pets={visitedPets} />}
      {activeTab === "scanner" && <Scanner />}
      {activeTab === "pets" && <Pets pets={pets} setPets={setPets} />}
    </div>
  );
}

export default App;
