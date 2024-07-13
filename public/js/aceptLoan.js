function selectAll() {
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      checkbox.checked = true
    })
}

function sendRequest(loanStatus) {
  let items = []
  
  document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    if (checkbox.checked === true) {
      items.push(checkbox.value)
    }
  })
  
  if (loanStatus) {
    fetch("/aceptNewLoan", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(items)
    })
    .then((data) => {
      if (data.ok) {
        location.reload()
      }
    })
    .catch((err) => {
      console.error(err)
    })
  } else {
    fetch("/rejectNewLoan", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(items)
    })
    .then((data) => {
      if (data.ok) {
        location.reload()
      }
    })
    .catch((err) => {
      console.error(err)
    })
  }
}