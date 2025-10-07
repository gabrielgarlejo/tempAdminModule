import React, { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [editFormData, setEditFormData] = useState({
    status: "active",
    type: "",
    group: "",
    quantity: "",
  });
  const [showAddIssue, setShowAddIssue] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showVehicleFilters, setShowVehicleFilters] = useState(false);
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [showAddInspection, setShowAddInspection] = useState(false);
  const [showInspectionFilters, setShowInspectionFilters] = useState(false);
  const [inspectionTab, setInspectionTab] = useState("all");
  const [inspectionFilters, setInspectionFilters] = useState({
    vehicleType: "",
    inspectionType: "",
    scheduledDate: "",
  });
  const [newInspectionData, setNewInspectionData] = useState({
    vehicleName: "",
    type: "",
    inspectionType: "",
    scheduledDate: "",
    status: "scheduled",
  });
  const [vehicleTab, setVehicleTab] = useState("all");
  const [vehicleSearchQuery, setVehicleSearchQuery] = useState("");
  const [vehicleFilters, setVehicleFilters] = useState({
    year: "",
    make: "",
    model: "",
    trim: "",
    fuelType: "",
    currentMeter: "",
  });
  const [newVehicleData, setNewVehicleData] = useState({
    name: "",
    year: "",
    make: "",
    model: "",
    vin: "",
    plateNumber: "",
    type: "",
    group: "",
    status: "active",
  });
  const [issueFormData, setIssueFormData] = useState({
    issue: "",
    type: "",
    date: "",
    time: "",
    plateNumber: "",
  });
  const [filterData, setFilterData] = useState({
    plateNumber: "",
    issue: "",
    type: "",
    date: "",
    time: "",
  });

  // Dummy data
  const drivers = [
    { name: "CONNOR MCGREGGOR", status: "available" },
    { name: "APOLLO QUIBOLOY", status: "available" },
    { name: "WILLIE REVILLAME", status: "available" },
    { name: "FRANK SINATRA", status: "available" },
    { name: "VINCENT VAN GOGH", status: "available" },
    { name: "FRANCIS GREG", status: "available" },
    { name: "AUBREY DRAKE GRAHAM", status: "available" },
    { name: "BOBBY PACQUIAO", status: "available" },
    { name: "JAMES HARDEN", status: "available" },
    { name: "CHRISTIAN GREY", status: "available" },
  ];

  const inventoryItems = [
    {
      id: 1,
      name: "Tires",
      status: "Available",
      type: "Van",
      group: "Dunlop",
      quantity: 12,
      image: "🛞",
    },
    {
      id: 2,
      name: "Oil",
      status: "Available",
      type: "Suv",
      group: "Shell",
      quantity: 15231,
      image: "🛢️",
    },
    {
      id: 3,
      name: "Brakes",
      status: "Out Of Stocks",
      type: "Van",
      group: "Bremboo",
      quantity: 14231,
      image: "🔧",
    },
  ];

  const issuesData = [
    {
      id: 1,
      vehicleId: "PW-1",
      vehicleModel: "2014 Ram Ram Pickup 1500",
      plateNumber: "1A13212",
      issue: "Tires changed",
      type: "Suv",
      date: "09/12/25",
      time: "5:39 Pm",
    },
    {
      id: 2,
      vehicleId: "LE-4",
      vehicleModel: "2021 Toyota Hiace",
      plateNumber: "1A13333",
      issue: "Fluid changed",
      type: "Van",
      date: "09/05/25",
      time: "5:31 Pm",
    },
    {
      id: 3,
      vehicleId: "PW-5",
      vehicleModel: "2021 Toyota Hiace",
      plateNumber: "1A13777",
      issue: "Battery changed",
      type: "Van",
      date: "08/11/25",
      time: "5:26 Pm",
    },
    {
      id: 4,
      vehicleId: "PW-7",
      vehicleModel: "2021 Toyota Hiace",
      plateNumber: "1A18677",
      issue: "Tires changed",
      type: "Van",
      date: "06/12/25",
      time: "2:55 Pm",
    },
  ];

  const vehiclesData = [
    {
      id: 1,
      name: "PW-1",
      year: "2014",
      make: "Ram",
      model: "Ram Pickup 1500",
      vin: "1C6RR7GT8ES176075",
      plateNumber: "1A13212",
      rfidBalance: "20000",
      status: "Active",
      type: "Suv",
      group: "Company",
      currentMeter: "12,231",
      lastUpdate: "3 Months Ago",
    },
    {
      id: 2,
      name: "LE-4",
      year: "2021",
      make: "Toyota",
      model: "Hiace",
      vin: "1C6RR7GT8ES176075",
      plateNumber: "1A13333",
      rfidBalance: "20000",
      status: "Out Of Service",
      type: "Van",
      group: "Public works",
      currentMeter: "12,231",
      lastUpdate: "3 Months Ago",
    },
    {
      id: 3,
      name: "PW-5",
      year: "2021",
      make: "Toyota",
      model: "Hiace",
      vin: "1C6RU8GT8ES176077",
      plateNumber: "1A13777",
      rfidBalance: "20000",
      status: "Active",
      type: "Van",
      group: "Public works",
      currentMeter: "12,231",
      lastUpdate: "3 Months Ago",
    },
    {
      id: 4,
      name: "PW-7",
      year: "2021",
      make: "Toyota",
      model: "Hiace",
      vin: "1C6RU8GT8ES176760",
      plateNumber: "1A18877",
      rfidBalance: "20000",
      status: "Active",
      type: "Van",
      group: "Company",
      currentMeter: "12,231",
      lastUpdate: "3 Months Ago",
    },
  ];

  const inspectionsData = [
    {
      id: 1,
      vehicleName: "PW-1",
      vehicleYear: "2014",
      vehicleMake: "Ram",
      vehicleModel: "Ram Pickup 1500",
      vin: "1C6RR7GT8ES176075",
      plateNumber: "1A13212",
      type: "SUV",
      inspectionType: "Monthly Check",
      scheduledDate: "August 28, 2025",
      status: "Scheduled",
    },
    {
      id: 2,
      vehicleName: "LE-4",
      vehicleYear: "2021",
      vehicleMake: "Toyota",
      vehicleModel: "Hiace",
      vin: "1C6RR7GU7ES176075",
      plateNumber: "1A13333",
      type: "Van",
      inspectionType: "Oil and Battery",
      scheduledDate: "October 28, 2025",
      status: "Scheduled",
    },
    {
      id: 3,
      vehicleName: "PW-5",
      vehicleYear: "2021",
      vehicleMake: "Toyota",
      vehicleModel: "Hiace",
      vin: "1C6RU8GT8ES176077",
      plateNumber: "1A13777",
      type: "Van",
      inspectionType: "Safety",
      scheduledDate: "August 29, 2025",
      status: "Scheduled",
    },
    {
      id: 4,
      vehicleName: "PW-7",
      vehicleYear: "2021",
      vehicleMake: "Toyota",
      vehicleModel: "Hiace",
      vin: "1C6RU8GT8ES176760",
      plateNumber: "1A18877",
      type: "Van",
      inspectionType: "Oil and Battery",
      scheduledDate: "September 28, 2025",
      status: "Scheduled",
    },
  ];

  const filteredInventory = inventoryItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredIssues = issuesData.filter((issue) => {
    return (
      (!filterData.plateNumber ||
        issue.plateNumber
          .toLowerCase()
          .includes(filterData.plateNumber.toLowerCase())) &&
      (!filterData.issue ||
        issue.issue.toLowerCase().includes(filterData.issue.toLowerCase())) &&
      (!filterData.type ||
        issue.type.toLowerCase().includes(filterData.type.toLowerCase())) &&
      (!filterData.date || issue.date.includes(filterData.date)) &&
      (!filterData.time ||
        issue.time.toLowerCase().includes(filterData.time.toLowerCase()))
    );
  });

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setEditFormData({
      status: item.status === "Available" ? "active" : "outofstock",
      type: item.type,
      group: item.group,
      quantity: item.quantity,
    });
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleSave = () => {
    // Save logic would go here
    setSelectedItem(null);
  };

  const handleAddIssue = () => {
    // Add issue logic would go here
    setShowAddIssue(false);
    setIssueFormData({
      issue: "",
      type: "",
      date: "",
      time: "",
      plateNumber: "",
    });
  };

  const handleApplyFilters = () => {
    setShowFilters(false);
  };

  const handleAddVehicle = () => {
    setShowAddVehicle(false);
    setNewVehicleData({
      name: "",
      year: "",
      make: "",
      model: "",
      vin: "",
      plateNumber: "",
      type: "",
      group: "",
      status: "active",
    });
  };

  const handleApplyVehicleFilters = () => {
    setShowVehicleFilters(false);
  };

  const handleAddInspection = () => {
    setShowAddInspection(false);
    setNewInspectionData({
      vehicleName: "",
      type: "",
      inspectionType: "",
      scheduledDate: "",
      status: "scheduled",
    });
  };

  const handleApplyInspectionFilters = () => {
    setShowInspectionFilters(false);
  };

  const filteredInspections = inspectionsData.filter((inspection) => {
    return (
      (!inspectionFilters.vehicleType ||
        inspection.type
          .toLowerCase()
          .includes(inspectionFilters.vehicleType.toLowerCase())) &&
      (!inspectionFilters.inspectionType ||
        inspection.inspectionType
          .toLowerCase()
          .includes(inspectionFilters.inspectionType.toLowerCase())) &&
      (!inspectionFilters.scheduledDate ||
        inspection.scheduledDate.includes(inspectionFilters.scheduledDate))
    );
  });

  const filteredVehicles = vehiclesData.filter((vehicle) => {
    const matchesSearch =
      vehicle.name.toLowerCase().includes(vehicleSearchQuery.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(vehicleSearchQuery.toLowerCase()) ||
      vehicle.vin.toLowerCase().includes(vehicleSearchQuery.toLowerCase());

    const matchesFilters =
      (!vehicleFilters.year || vehicle.year.includes(vehicleFilters.year)) &&
      (!vehicleFilters.make ||
        vehicle.make
          .toLowerCase()
          .includes(vehicleFilters.make.toLowerCase())) &&
      (!vehicleFilters.model ||
        vehicle.model
          .toLowerCase()
          .includes(vehicleFilters.model.toLowerCase())) &&
      (!vehicleFilters.currentMeter ||
        vehicle.currentMeter.includes(vehicleFilters.currentMeter));

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="flex h-screen bg-gray-300">
      {/* Sidebar */}
      <div className="w-60 bg-gradient-to-b from-green-800 to-green-900 text-white">
        <div className="p-6 border-b border-green-700">
          <h1 className="text-3xl font-bold">JMTC</h1>
        </div>

        <nav className="mt-2">
          <button
            onClick={() => setActiveSection("dashboard")}
            className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
              activeSection === "dashboard"
                ? "bg-green-700"
                : "hover:bg-green-700"
            }`}
          >
            <span className="text-xl">🏠</span>
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveSection("vehicles")}
            className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
              activeSection === "vehicles"
                ? "bg-green-700"
                : "hover:bg-green-700"
            }`}
          >
            <span className="text-xl">🚗</span>
            <span className="font-medium">Vehicles</span>
          </button>

          <button
            onClick={() => setActiveSection("inspection")}
            className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
              activeSection === "inspection"
                ? "bg-green-700"
                : "hover:bg-green-700"
            }`}
          >
            <span className="text-xl">📋</span>
            <span className="font-medium">Inspection</span>
          </button>

          <button
            onClick={() => setActiveSection("issues")}
            className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
              activeSection === "issues"
                ? "bg-yellow-600"
                : "hover:bg-green-700"
            }`}
          >
            <span className="text-xl">⚠️</span>
            <span className="font-medium">Issues</span>
          </button>

          <button
            onClick={() => setActiveSection("parts")}
            className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
              activeSection === "parts" ? "bg-yellow-600" : "hover:bg-green-700"
            }`}
          >
            <span className="text-xl">🔧</span>
            <span className="font-medium">Parts / Inventory</span>
          </button>

          <button
            onClick={() => setActiveSection("fuel")}
            className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
              activeSection === "fuel" ? "bg-green-700" : "hover:bg-green-700"
            }`}
          ></button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-cyan-500 p-4 flex items-center justify-between">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <span className="text-4xl">🚗</span>
          </div>

          <div className="w-12 h-12 bg-blue-400 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/48"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dashboard Content */}
        {activeSection === "dashboard" && (
          <div className="p-6">
            <h2 className="text-4xl font-bold mb-6">My Dashboard</h2>

            <div className="grid grid-cols-4 gap-4 mb-4">
              {/* Driver List */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-center font-semibold mb-4 text-lg">
                  Driver list
                </h3>

                <div className="flex justify-around mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600">10</div>
                    <div className="text-sm text-gray-600 mt-1">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-500">8</div>
                    <div className="text-sm text-gray-600 mt-1">Assigned</div>
                  </div>
                </div>

                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {drivers.map((driver, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-xs font-medium">{driver.name}</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicles */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-center font-semibold mb-4 text-lg">
                  Vehicles
                </h3>

                <div className="flex justify-around mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600">10</div>
                    <div className="text-sm text-gray-600 mt-1">Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-500">8</div>
                    <div className="text-sm text-gray-600 mt-1">Inactive</div>
                  </div>
                </div>
              </div>

              {/* Vehicle Assignments */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-center font-semibold mb-4 text-lg">
                  Vehicle Assignments
                </h3>

                <div className="flex justify-around mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-500">1</div>
                    <div className="text-sm text-gray-600 mt-1">Assigned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-yellow-500">17</div>
                    <div className="text-sm text-gray-600 mt-1">Unassigned</div>
                  </div>
                </div>
              </div>

              {/* Inventory Notifications */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-center font-semibold mb-4 text-lg">
                  Inventory Notifications
                </h3>

                <div className="flex justify-center items-center h-32">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-500">0</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Out of Stock
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* Pending Maintenance */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-center font-semibold mb-4 text-lg">
                  Pending Maintenance
                </h3>

                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-red-600">3</div>
                    <div className="text-sm text-gray-600 mt-1">Overdue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-yellow-500">9</div>
                    <div className="text-sm text-gray-600 mt-1">Due Soon</div>
                  </div>
                </div>
              </div>

              {/* Issues */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-center font-semibold mb-4 text-lg">
                  Issues
                </h3>

                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-yellow-500">10</div>
                    <div className="text-sm text-gray-600 mt-1">Open</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-500">0</div>
                    <div className="text-sm text-gray-600 mt-1">Overdue</div>
                  </div>
                </div>
              </div>

              {/* Vehicle Renewal Reminders */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-center font-semibold mb-4 text-lg">
                  Vehicle Renewal Reminders
                </h3>

                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-red-600">3</div>
                    <div className="text-sm text-gray-600 mt-1">Overdue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-yellow-500">17</div>
                    <div className="text-sm text-gray-600 mt-1">Due Soon</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Vehicle Status */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-center font-semibold mb-4 text-lg">
                  Vehicle Status
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Active</span>
                    </div>
                    <span className="font-bold">10</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Inactive</span>
                    </div>
                    <span className="font-bold">8</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                      <span className="font-medium">In Shop</span>
                    </div>
                    <span className="font-bold">1</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Out of Service</span>
                    </div>
                    <span className="font-bold">3</span>
                  </div>
                </div>
              </div>

              {/* Tool Status */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-center font-semibold mb-4 text-lg">
                  Tool Status
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="font-medium">In-Service</span>
                    </div>
                    <span className="font-bold">1</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Out-of-Service</span>
                    </div>
                    <span className="font-bold">0</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                      <span className="font-medium">Disposed</span>
                    </div>
                    <span className="font-bold">1</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">Missing</span>
                    </div>
                    <span className="font-bold">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Inspection Section */}
        {activeSection === "inspection" && (
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold">Inspection</h2>
              <button
                onClick={() => {
                  console.log("Add Inspection clicked");
                  setShowAddInspection(true);
                }}
                className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 flex items-center gap-2 font-medium"
              >
                <span>+</span>
                <span>Add Inspection</span>
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setInspectionTab("all")}
                className={`px-6 py-2 rounded-full ${
                  inspectionTab === "all"
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setInspectionTab("archived")}
                className={`px-4 py-2 rounded-full ${
                  inspectionTab === "archived"
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-200"
                } flex items-center gap-1`}
              >
                <span>📁</span>
                <span>Archived</span>
              </button>
            </div>

            {/* Search and Filter Inputs */}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Filter vehicle types"
                value={inspectionFilters.vehicleType}
                onChange={(e) =>
                  setInspectionFilters({
                    ...inspectionFilters,
                    vehicleType: e.target.value,
                  })
                }
                className="px-4 py-2 border border-gray-300 rounded-md flex-1"
              />
              <input
                type="text"
                placeholder="Filter inspection type"
                value={inspectionFilters.inspectionType}
                onChange={(e) =>
                  setInspectionFilters({
                    ...inspectionFilters,
                    inspectionType: e.target.value,
                  })
                }
                className="px-4 py-2 border border-gray-300 rounded-md flex-1"
              />
              <input
                type="text"
                placeholder="Filter scheduled date"
                value={inspectionFilters.scheduledDate}
                onChange={(e) =>
                  setInspectionFilters({
                    ...inspectionFilters,
                    scheduledDate: e.target.value,
                  })
                }
                className="px-4 py-2 border border-gray-300 rounded-md flex-1"
              />
              <button
                onClick={() => setShowInspectionFilters(true)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center gap-2"
              >
                <span>☰</span>
                <span>More</span>
              </button>
              <button className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 flex items-center gap-2">
                <span>🔍</span>
                <span>Search</span>
              </button>
            </div>

            <div className="text-sm text-gray-600 mb-4">0 filters applied</div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center">
                <div className="text-sm text-gray-600">0 selected:</div>
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center gap-2">
                  <span>Update</span>
                  <span>▼</span>
                </button>
                <button className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  📄
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  Sort:{" "}
                  <select className="border border-gray-300 rounded px-2 py-1">
                    <option>Updated - Newest First</option>
                  </select>
                </div>
                <div className="text-sm">1-2 of 2</div>
                <button className="text-gray-400">&lt;</button>
              </div>
            </div>

            {/* Inspection Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-4 bg-gray-100 border-b border-gray-300 font-semibold">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Name</span>
                </div>
                <div>Type</div>
                <div>Inspection Type</div>
                <div>Scheduled Date</div>
                <div>Status</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredInspections.map((inspection) => (
                  <div
                    key={inspection.id}
                    className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <input type="checkbox" />
                      <div className="w-16 h-12 bg-gray-300 rounded"></div>
                      <div>
                        <div className="font-bold">
                          {inspection.vehicleName}
                        </div>
                        <div className="text-sm text-gray-600">
                          {inspection.vehicleYear} {inspection.vehicleMake}{" "}
                          {inspection.vehicleModel}
                        </div>
                        <div className="text-xs text-gray-500">
                          VIN/SN:{" "}
                          <span className="text-gray-700">
                            {inspection.vin}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">
                          License Plate:{" "}
                          <span className="text-gray-700">
                            {inspection.plateNumber}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">{inspection.type}</div>
                    <div className="flex items-center">
                      {inspection.inspectionType}
                    </div>
                    <div className="flex items-center">
                      {inspection.scheduledDate}
                    </div>
                    <div className="flex items-center">{inspection.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Vehicles Section */}
        {activeSection === "vehicles" && (
          <div className="p-6">
            {/* Top Bar with Search */}
            <div className="bg-cyan-600 -m-6 mb-6 p-4 flex items-center gap-4">
              <input
                type="text"
                placeholder="Search vehicles and contacts..."
                value={vehicleSearchQuery}
                onChange={(e) => setVehicleSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md border-none"
              />
              <button className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-600">
                🔍
              </button>
              <div className="flex items-center gap-4 text-white">
                <button className="flex items-center gap-1">
                  <span>❓</span>
                  <span>Help</span>
                  <span>▼</span>
                </button>
                <button className="flex items-center gap-1">
                  <span>JMTC</span>
                  <span>▼</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b">
              <button
                className={`pb-2 px-1 font-medium ${
                  vehicleTab === "all"
                    ? "border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => {}}
              >
                Vehicle List
              </button>
              <button className="pb-2 px-1 text-gray-400">
                Watched Vehicles
              </button>
              <button className="pb-2 px-1 text-gray-400">
                Managed GPS Devices
              </button>
            </div>

            <h2 className="text-3xl font-bold mb-6">Vehicle List</h2>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setVehicleTab("all")}
                className={`px-6 py-2 rounded-full ${
                  vehicleTab === "all"
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setVehicleTab("assigned")}
                className={`px-6 py-2 rounded-full ${
                  vehicleTab === "assigned"
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Assigned
              </button>
              <button
                onClick={() => setVehicleTab("unassigned")}
                className={`px-6 py-2 rounded-full ${
                  vehicleTab === "unassigned"
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Unassigned
              </button>
              <button
                onClick={() => setVehicleTab("archived")}
                className={`px-4 py-2 rounded-full ${
                  vehicleTab === "archived"
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-200"
                } flex items-center gap-1`}
              >
                <span>📁</span>
                <span>Archived</span>
              </button>
            </div>

            {/* Search and Filter Inputs */}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Search names, VINs, an"
                className="px-4 py-2 border border-gray-300 rounded-md flex-1"
              />
              <input
                type="text"
                placeholder="Filter vehicle types"
                className="px-4 py-2 border border-gray-300 rounded-md flex-1"
              />
              <input
                type="text"
                placeholder="Filter vehicle groups"
                className="px-4 py-2 border border-gray-300 rounded-md flex-1"
              />
              <input
                type="text"
                placeholder="Filter statuses"
                className="px-4 py-2 border border-gray-300 rounded-md flex-1"
              />
              <button
                onClick={() => setShowVehicleFilters(true)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center gap-2"
              >
                <span>☰</span>
                <span>More</span>
              </button>
              <button className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600">
                🔍 Search
              </button>
            </div>

            <div className="text-sm text-gray-600 mb-4">0 filters applied</div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                <div className="text-sm text-gray-600">0 selected:</div>
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center gap-2">
                  <span>Update</span>
                  <span>▼</span>
                </button>
                <button className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  📄
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center gap-2">
                  <span>🖨️</span>
                  <span>Print Labels</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center gap-2">
                  <span>☰</span>
                  <span>Filters</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  Sort:{" "}
                  <select className="border border-gray-300 rounded px-2 py-1">
                    <option>Updated - Newest First</option>
                  </select>
                </div>
                <div className="text-sm">1-31 of 31</div>
                <button
                  onClick={() => setShowAddVehicle(true)}
                  className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 flex items-center gap-2 font-medium"
                >
                  <span>+</span>
                  <span>Add Vehicle</span>
                </button>
              </div>
            </div>

            {/* Vehicle Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-4 bg-gray-100 border-b border-gray-300 font-semibold">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Name</span>
                </div>
                <div>Status</div>
                <div>Type</div>
                <div>Group</div>
                <div>Current Meter</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <input type="checkbox" />
                      <div className="w-16 h-12 bg-gray-300 rounded"></div>
                      <div>
                        <div className="font-bold">{vehicle.name}</div>
                        <div className="text-sm text-gray-600">
                          {vehicle.year} {vehicle.make} {vehicle.model}
                        </div>
                        <div className="text-xs text-gray-500">
                          VIN/SN: {vehicle.vin}
                        </div>
                        <div className="text-xs text-gray-500">
                          License Plate:{" "}
                          <span className="text-gray-700">
                            {vehicle.plateNumber}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">
                          RFID Balance:{" "}
                          <span className="text-gray-700">
                            {vehicle.rfidBalance}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            vehicle.status === "Active"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        <span>{vehicle.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center">{vehicle.type}</div>
                    <div className="flex items-center">{vehicle.group}</div>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold">
                          {vehicle.currentMeter}
                        </div>
                        <div className="text-sm text-yellow-600">
                          {vehicle.lastUpdate}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Issues Section */}
        {activeSection === "issues" && (
          <div className="p-8">
            <h2 className="text-4xl font-bold mb-6">Issues</h2>

            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setShowAddIssue(true)}
                className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 flex items-center gap-2 font-medium"
              >
                <span className="text-xl">⊕</span>
                <span>Add</span>
              </button>

              <button
                onClick={() => setShowFilters(true)}
                className="bg-white border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2"
              >
                <span>☰</span>
                <span>filtered</span>
              </button>
            </div>

            {/* Issues Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-300 font-semibold bg-gray-50">
                <div>Name</div>
                <div>Issue</div>
                <div>Type</div>
                <div>Date</div>
                <div>Time</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredIssues.map((issue) => (
                  <div
                    key={issue.id}
                    className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-12 bg-gray-300 rounded"></div>
                        <div>
                          <div className="font-bold">{issue.vehicleId}</div>
                          <div className="text-sm text-gray-600">
                            {issue.vehicleModel}
                          </div>
                          <div className="text-xs text-gray-500">
                            License Plate:
                          </div>
                          <div className="text-xs text-gray-700">
                            {issue.plateNumber}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">{issue.issue}</div>
                    <div className="flex items-center">{issue.type}</div>
                    <div className="flex items-center">{issue.date}</div>
                    <div className="flex items-center">{issue.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Add Issue Modal */}
        {showAddIssue && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-96 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Issue</h3>

              <div className="space-y-4">
                {/* Issue Field */}
                <div>
                  <label className="block mb-2 font-medium">Issue</label>
                  <input
                    type="text"
                    placeholder="Tires"
                    value={issueFormData.issue}
                    onChange={(e) =>
                      setIssueFormData({
                        ...issueFormData,
                        issue: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>

                {/* Type Field */}
                <div>
                  <label className="block mb-2 font-medium">Type</label>
                  <input
                    type="text"
                    placeholder="Suv"
                    value={issueFormData.type}
                    onChange={(e) =>
                      setIssueFormData({
                        ...issueFormData,
                        type: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>

                {/* Date Field */}
                <div>
                  <label className="block mb-2 font-medium">Date</label>
                  <input
                    type="text"
                    placeholder="08/11/25"
                    value={issueFormData.date}
                    onChange={(e) =>
                      setIssueFormData({
                        ...issueFormData,
                        date: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>

                {/* Time Field */}
                <div>
                  <label className="block mb-2 font-medium">Time</label>
                  <input
                    type="text"
                    placeholder="5:39 Pm"
                    value={issueFormData.time}
                    onChange={(e) =>
                      setIssueFormData({
                        ...issueFormData,
                        time: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>

                {/* Plate Number Field */}
                <div>
                  <label className="block mb-2 font-medium">Plate Number</label>
                  <input
                    type="text"
                    placeholder="1A13333"
                    value={issueFormData.plateNumber}
                    onChange={(e) =>
                      setIssueFormData({
                        ...issueFormData,
                        plateNumber: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleAddIssue}
                    className="px-12 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 font-medium"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters Modal */}
        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-96 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>☰</span>
                <span>Filters</span>
              </h3>

              <div className="space-y-4">
                {/* Plate Number Field */}
                <div>
                  <label className="block mb-2 font-medium">Plate Number</label>
                  <input
                    type="text"
                    placeholder="1A13212"
                    value={filterData.plateNumber}
                    onChange={(e) =>
                      setFilterData({
                        ...filterData,
                        plateNumber: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Issue Field */}
                <div>
                  <label className="block mb-2 font-medium">Issue</label>
                  <input
                    type="text"
                    value={filterData.issue}
                    onChange={(e) =>
                      setFilterData({ ...filterData, issue: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Type Field */}
                <div>
                  <label className="block mb-2 font-medium">Type</label>
                  <input
                    type="text"
                    value={filterData.type}
                    onChange={(e) =>
                      setFilterData({ ...filterData, type: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Date Field */}
                <div>
                  <label className="block mb-2 font-medium">Date</label>
                  <input
                    type="text"
                    value={filterData.date}
                    onChange={(e) =>
                      setFilterData({ ...filterData, date: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Time Field */}
                <div>
                  <label className="block mb-2 font-medium">Time</label>
                  <input
                    type="text"
                    value={filterData.time}
                    onChange={(e) =>
                      setFilterData({ ...filterData, time: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleApplyFilters}
                    className="px-12 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 font-medium"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Parts/Inventory Section */}
        {activeSection === "parts" && (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold">Parts and Inventory</h2>
              <button className="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600 flex items-center gap-2">
                <span>🔍</span>
                <span>Search</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="mb-6 flex justify-end">
              <input
                type="text"
                placeholder="Tires"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-400 rounded-md w-64"
              />
            </div>

            {/* Inventory Table */}
            <div className="bg-white rounded-lg shadow-lg border-2 border-gray-800 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-6 border-b-2 border-gray-300 font-semibold text-lg">
                <div>Name</div>
                <div>Status</div>
                <div>Type</div>
                <div>Group</div>
                <div>Quantity</div>
              </div>

              {/* Table Body */}
              <div className="divide-y-2 divide-gray-300">
                {filteredInventory.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className="grid grid-cols-5 gap-4 p-6 hover:bg-gray-50 cursor-pointer items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">
                        {item.image}
                      </div>
                      <span className="font-semibold text-lg">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.status === "Available"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <span>{item.status}</span>
                    </div>
                    <div>{item.type}</div>
                    <div>{item.group}</div>
                    <div>{item.quantity.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-96 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {selectedItem.name}
              </h3>

              <div className="space-y-6">
                {/* Status Radio Buttons */}
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value="active"
                        checked={editFormData.status === "active"}
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            status: e.target.value,
                          })
                        }
                        className="w-5 h-5"
                      />
                      <span>Active</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value="outofstock"
                        checked={editFormData.status === "outofstock"}
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            status: e.target.value,
                          })
                        }
                        className="w-5 h-5"
                      />
                      <span>Out of Stock</span>
                    </label>
                  </div>
                </div>

                {/* Type Field */}
                <div>
                  <label className="block mb-2 font-medium">type</label>
                  <input
                    type="text"
                    value={editFormData.type}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, type: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Group Field */}
                <div>
                  <label className="block mb-2 font-medium">Group</label>
                  <input
                    type="text"
                    value={editFormData.group}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        group: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Quantity Field */}
                <div>
                  <label className="block mb-2 font-medium">Quantity</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={editFormData.quantity}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          quantity: e.target.value,
                        })
                      }
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                    />
                    <span className="text-gray-600">units</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={handleCloseModal}
                    className="px-8 py-2 border-2 border-black rounded-full hover:bg-gray-100 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-8 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 font-medium"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Vehicle Modal */}
      {showAddVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-2xl max-h-screen overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Add Vehicle</h3>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  value={newVehicleData.name}
                  onChange={(e) =>
                    setNewVehicleData({
                      ...newVehicleData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Year</label>
                <input
                  type="text"
                  value={newVehicleData.year}
                  onChange={(e) =>
                    setNewVehicleData({
                      ...newVehicleData,
                      year: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Make</label>
                <input
                  type="text"
                  value={newVehicleData.make}
                  onChange={(e) =>
                    setNewVehicleData({
                      ...newVehicleData,
                      make: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Model</label>
                <input
                  type="text"
                  value={newVehicleData.model}
                  onChange={(e) =>
                    setNewVehicleData({
                      ...newVehicleData,
                      model: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">VIN</label>
                <input
                  type="text"
                  value={newVehicleData.vin}
                  onChange={(e) =>
                    setNewVehicleData({
                      ...newVehicleData,
                      vin: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">License Plate</label>
                <input
                  type="text"
                  value={newVehicleData.plateNumber}
                  onChange={(e) =>
                    setNewVehicleData({
                      ...newVehicleData,
                      plateNumber: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Type</label>
                <input
                  type="text"
                  value={newVehicleData.type}
                  onChange={(e) =>
                    setNewVehicleData({
                      ...newVehicleData,
                      type: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Group</label>
                <input
                  type="text"
                  value={newVehicleData.group}
                  onChange={(e) =>
                    setNewVehicleData({
                      ...newVehicleData,
                      group: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Status</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="vehicleStatus"
                      value="active"
                      checked={newVehicleData.status === "active"}
                      onChange={(e) =>
                        setNewVehicleData({
                          ...newVehicleData,
                          status: e.target.value,
                        })
                      }
                      className="w-5 h-5"
                    />
                    <span>Active</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="vehicleStatus"
                      value="inactive"
                      checked={newVehicleData.status === "inactive"}
                      onChange={(e) =>
                        setNewVehicleData({
                          ...newVehicleData,
                          status: e.target.value,
                        })
                      }
                      className="w-5 h-5"
                    />
                    <span>Inactive</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setShowAddVehicle(false)}
                  className="px-8 py-2 border-2 border-black rounded-full hover:bg-gray-100 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddVehicle}
                  className="px-8 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 font-medium"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Inspection Modal */}
      {showAddInspection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Add Inspection
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Vehicle Name</label>
                <input
                  type="text"
                  placeholder="PW-1"
                  value={newInspectionData.vehicleName}
                  onChange={(e) =>
                    setNewInspectionData({
                      ...newInspectionData,
                      vehicleName: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Type</label>
                <input
                  type="text"
                  placeholder="SUV"
                  value={newInspectionData.type}
                  onChange={(e) =>
                    setNewInspectionData({
                      ...newInspectionData,
                      type: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Inspection Type
                </label>
                <input
                  type="text"
                  placeholder="Monthly Check"
                  value={newInspectionData.inspectionType}
                  onChange={(e) =>
                    setNewInspectionData({
                      ...newInspectionData,
                      inspectionType: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Scheduled Date</label>
                <input
                  type="text"
                  placeholder="August 28, 2025"
                  value={newInspectionData.scheduledDate}
                  onChange={(e) =>
                    setNewInspectionData({
                      ...newInspectionData,
                      scheduledDate: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Status</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="inspectionStatus"
                      value="scheduled"
                      checked={newInspectionData.status === "scheduled"}
                      onChange={(e) =>
                        setNewInspectionData({
                          ...newInspectionData,
                          status: e.target.value,
                        })
                      }
                      className="w-5 h-5"
                    />
                    <span>Scheduled</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="inspectionStatus"
                      value="completed"
                      checked={newInspectionData.status === "completed"}
                      onChange={(e) =>
                        setNewInspectionData({
                          ...newInspectionData,
                          status: e.target.value,
                        })
                      }
                      className="w-5 h-5"
                    />
                    <span>Completed</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setShowAddInspection(false)}
                  className="px-8 py-2 border-2 border-black rounded-full hover:bg-gray-100 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddInspection}
                  className="px-8 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 font-medium"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inspection Filters Modal */}
      {showInspectionFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>☰</span>
              <span>More Filters</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Vehicle Type</label>
                <input
                  type="text"
                  placeholder="Filter vehicle type"
                  value={inspectionFilters.vehicleType}
                  onChange={(e) =>
                    setInspectionFilters({
                      ...inspectionFilters,
                      vehicleType: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Inspection Type
                </label>
                <input
                  type="text"
                  placeholder="Filter inspection type"
                  value={inspectionFilters.inspectionType}
                  onChange={(e) =>
                    setInspectionFilters({
                      ...inspectionFilters,
                      inspectionType: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Scheduled Date</label>
                <input
                  type="text"
                  placeholder="Filter scheduled date"
                  value={inspectionFilters.scheduledDate}
                  onChange={(e) =>
                    setInspectionFilters({
                      ...inspectionFilters,
                      scheduledDate: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={handleApplyInspectionFilters}
                  className="px-12 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 font-medium"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vehicle Filters Modal */}
      {showVehicleFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>☰</span>
              <span>Filters</span>
            </h3>
            <div className="text-sm text-cyan-600 mb-4 flex items-center gap-1">
              <span className="bg-cyan-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                1
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Vehicle Year</label>
                <input
                  type="text"
                  placeholder="Filter year"
                  value={vehicleFilters.year}
                  onChange={(e) =>
                    setVehicleFilters({
                      ...vehicleFilters,
                      year: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Vehicle Make</label>
                <input
                  type="text"
                  placeholder="Filter make"
                  value={vehicleFilters.make}
                  onChange={(e) =>
                    setVehicleFilters({
                      ...vehicleFilters,
                      make: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Vehicle Model</label>
                <input
                  type="text"
                  placeholder="Filter model"
                  value={vehicleFilters.model}
                  onChange={(e) =>
                    setVehicleFilters({
                      ...vehicleFilters,
                      model: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Vehicle Trim</label>
                <input
                  type="text"
                  placeholder="Filter trim"
                  value={vehicleFilters.trim}
                  onChange={(e) =>
                    setVehicleFilters({
                      ...vehicleFilters,
                      trim: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Filter fuel types
                </label>
                <input
                  type="text"
                  value={vehicleFilters.fuelType}
                  onChange={(e) =>
                    setVehicleFilters({
                      ...vehicleFilters,
                      fuelType: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Current Meter</label>
                <input
                  type="text"
                  placeholder="1-31 of 31"
                  value={vehicleFilters.currentMeter}
                  onChange={(e) =>
                    setVehicleFilters({
                      ...vehicleFilters,
                      currentMeter: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={handleApplyVehicleFilters}
                  className="px-12 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 font-medium"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
