// Sample car data
const carsData = {
    Toyota: {
      Sedan: ["Mark-X", "Corolla"],
      SUV: ["Land Cruiser", "RAV4"],
      Truck: ["Hilux"]
    },
    Mazda: {
      Sedan: ["Atenza", "Axela"],
      SUV: ["CX-5", "CX-9"],
      Truck: ["BT-50"]
    },
    Mercedes: {
      Sedan: ["C-Class", "E-Class"],
      SUV: ["GLC", "GLE"],
      Truck: []
    }
  };
  
  // Car details for displaying result
  const carDetails = {
    "Corolla": { img: "images/Corolla 1.jpeg", price: "$40,000", specs: "2.0L Turbo, 2021" },
    "Mark-X": { img: "images/mark X 2.jpeg", price: "$15,000", specs: "2.5L V6 <br> 203Hp <br> 9km/L <br> 2018", comparisons: "Competes with Nissan Teano and Honda Accord" },
    "Land Cruiser": { img: "images/cruiser 2.png", price: "$50,000", specs: "4.5L V8, 2020" },
    "Hilux": { img: "images/Hilux 1.jpeg", price: "$30,000", specs: "2.8L Diesel, 2021" },
    "CX-5": { img: "images/cx 5.jpeg", price: "$25,000", specs: "2.2L Diesel, 2019" },
    "GLC": { img: "images/GLC 1.jpeg", price: "$40,000", specs: "2.0L Turbo, 2021" },
    // Add more cars here!
  };
  
  // Populate brand dropdown
  const brandSelect = document.getElementById("brandSelect");
  const typeSelect = document.getElementById("typeSelect");
  const modelSelect = document.getElementById("modelSelect");
  
  window.onload = () => {
    Object.keys(carsData).forEach(brand => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandSelect.appendChild(option);
    });
  };
  
  brandSelect.addEventListener("change", function () {
    typeSelect.innerHTML = `<option value="">Select Type</option>`;
    modelSelect.innerHTML = `<option value="">Select Model</option>`;
    modelSelect.disabled = true;
  
    const selectedBrand = this.value;
    if (!selectedBrand) {
      typeSelect.disabled = true;
      return;
    }
  
    const types = Object.keys(carsData[selectedBrand]);
    types.forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeSelect.appendChild(option);
    });
  
    typeSelect.disabled = false;
  });
  
  typeSelect.addEventListener("change", function () {
    modelSelect.innerHTML = `<option value="">Select Model</option>`;
  
    const selectedBrand = brandSelect.value;
    const selectedType = this.value;
    if (!selectedType) {
      modelSelect.disabled = true;
      return;
    }
  
    const models = carsData[selectedBrand][selectedType];
    models.forEach(model => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  
    modelSelect.disabled = false;
  });
  
  function searchCar() {
    const model = modelSelect.value;
    const result = document.getElementById("carResult");
  
    if (!model || !carDetails[model]) {
      result.innerHTML = `<p>No car found. Please select valid options.</p>`;
      return;
    }
  
    const { img, price, specs, comparisons } = carDetails[model];
    result.innerHTML = `
      <img src="${img}" alt="${model}" />
      <h3>${model}</h3>
      <p>Price: ${price}</p>
      <p>Specs: ${specs}</p>
      <p>Comparison: ${comparisons}<p>
    `;
  }
  