function finalizar(user) {
    let items = []

    document.getElementsByName("component").forEach((item) => {
        if (item.checked === true) {
            let rqt = {
                registration: user,
                component: item.value, 
                spec: document.getElementById(`spec${item.value}`).value, 
                amount: Number(document.getElementById(`amount${item.value}`).value)
            }
            
            items.push(rqt)
        }
    })
    
    fetch("/requestComponents", {
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