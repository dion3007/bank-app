const DelBankDataFromLocal = (payload) => {
    const { id } = payload
  
    let bankLS = JSON.parse(localStorage.getItem('bank')) || []
    bankLS = bankLS.filter(item => item.id !== id)
    localStorage.setItem('bank', JSON.stringify(bankLS))
  }
  
  export default DelBankDataFromLocal