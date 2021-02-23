import { useState } from "react";
import classNames from "classnames";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const pets = [
    {
      id: 1,
      name: "Alex",
      dob: "29th Oct 2015",
      mobile: "9494949499",
      owners_name: "John Doe",
      address: "B 504, Animax township, NY",
      entered_at: "20th Dec 2019, 9:00 am",
      exited_at: "20th Dec 2019, 9:45 am",
    },
    {
      id: 2,
      name: "Bob",
      dob: "21th May 2017",
      mobile: "9998999899",
      owners_name: "Marry Jane",
      address: "C 104, Wall street, NY",
      entered_at: "22th Dec 2019, 10:00 am",
      exited_at: "22th Dec 2019, 10:45 am",
    },
    {
      id: 3,
      name: "Martha",
      dob: "17th Jan 2014",
      mobile: "9090999999",
      owners_name: "Carry Minati",
      address: "A1, Wander street, OTw",
      entered_at: "24th Dec 2019, 11:30 am",
      exited_at: "24th Dec 2019, 12:05 pm",
    },
    {
      id: 4,
      name: "Alex",
      dob: "29th Oct 2015",
      mobile: "9989889999",
      owners_name: "John Doe",
      address: "B 504, Animax township, NY",
      entered_at: "20th Dec 2019, 9:00 am",
      exited_at: "20th Dec 2019, 9:45 am",
    },
    {
      id: 5,
      name: "Alex",
      dob: "29th Oct 2015",
      mobile: "9976987678",
      owners_name: "John Doe",
      address: "B 504, Animax township, NY",
      entered_at: "20th Dec 2019, 9:00 am",
      exited_at: "20th Dec 2019, 9:45 am",
    },
  ];
  return (
    <div>
      <div className="header">
        <div className="container d-flex flex-column flex-md-row align-items-center py-2">
          <div className="logo-container">
            <img className="logo" src="/exix_logo.png" alt="Exix" />
          </div>
          <div className="nav">
            <div
              className={classNames("item dashboard px-3 px-md-5", {
                active: activeTab === "dashboard",
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("dashboard");
              }}
            >
              <i className="material-icons py-1">dashboard</i>
              <span>Dashboard</span>
            </div>
            <div
              className={classNames("item scanner px-3 px-md-5", {
                active: activeTab === "scanner",
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("scanner");
              }}
            >
              <i className="material-icons py-1">qr_code_scanner</i>
              <span>Scan Pet</span>
            </div>
            <div
              className={classNames("item new_profile px-3 px-md-5", {
                active: activeTab === "new_profile",
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("new_profile");
              }}
            >
              <i className="material-icons py-1">add_box</i>
              <span>New Profile</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        {activeTab === "dashboard" && (
          <div className="dashboard-box pt-5">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Owner Info
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Dog
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Entered at
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Exited at
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {pets.map((pet) => (
                          <tr key={pet.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {pet.owners_name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {pet.mobile}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {pet.address}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {pet.name}
                              </div>
                              <div className="text-sm text-gray-700">
                                {pet.dob}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {pet.entered_at}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                {pet.exited_at}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "new_profile" && (
          <div className="form mt-5">
            <div className=" flex items-center justify-center">
              <form
                id="form"
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <br />
                <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
                  Create Pet's Profile
                </h1>
                <br />
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Pet's Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Pet's Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Owner's Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="owners_name"
                    id="owners_name"
                    type="text"
                    placeholder="Owner's Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="tel"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="tel"
                    id="tel"
                    type="tel"
                    placeholder="9999999999"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="date"
                  >
                    Pet's Date of Birth
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="date"
                    id="date"
                    type="date"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="address"
                  >
                    Address
                  </label>

                  <textarea
                    className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="address"
                    id="address"
                    type="text"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Create Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
