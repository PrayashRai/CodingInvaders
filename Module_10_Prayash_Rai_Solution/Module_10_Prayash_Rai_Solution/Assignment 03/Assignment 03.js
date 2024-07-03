let manufacturers = ['audi', 'BMw', 'ForD', 'mG', 'tata', 'MAHINDRA'];

function processManufacturers(manufacturers) {
    let processedManufacturers = manufacturers.map((manufacturer) => manufacturer.toLowerCase());
  
    return {
      allLowerCase: processedManufacturers,
      allUpperCase: processedManufacturers.map((manufacturer) => manufacturer.toUpperCase()),
    };
  }
  
 
  let processedValues = processManufacturers(manufacturers);
  console.log(processedValues);
 
  