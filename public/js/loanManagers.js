function selectAll() {
  document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.checked = true
  })
}

function sendRequest() {
  let items = []

  document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    if (checkbox.checked === true) {
      items.push(checkbox.value)
    }
  })

  fetch("/confirmReturns", {
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