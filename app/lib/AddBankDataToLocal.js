const AddBankDataToLocal = (payload) => {
  const { id, accountName, accountNumber, swiftCode, address, city, country, firstName, lastName, companyName, type, currency } = payload
  
  const bankItem = {
    id,
    accountName,
    accountNumber,
    swiftCode,
    address,
    city,
    country,
    firstName,
    lastName,
    companyName,
    type,
    currency
  }

  let bankLS = JSON.parse(localStorage.getItem('bank')) || []
  const prevItem = bankLS.find(p => p.id === id)

  if (prevItem) {
    prevItem.id++
    bankLS.push(bankItem)
    bankLS = bankLS.filter(item => Object.keys(item).length !== 0)
  } else {
    bankLS.push(bankItem)
    bankLS = bankLS.filter(item => Object.keys(item).length !== 0)
  }

  localStorage.setItem('bank', JSON.stringify(bankLS));
}

export default AddBankDataToLocal
