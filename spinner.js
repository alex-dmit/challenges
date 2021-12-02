const sendBtn = document.getElementById('send-query')

function createElemHtml(html) {
    const template = document.createElement('div') 
    template.innerHTML = html
    return template.firstElementChild
}

const spinnerHtml = `<div class="spinner" data-attr="Hello">
    <img src="Rolling-1s-200px.svg" alt="">
</div>`

const spinner = createElemHtml(spinnerHtml)

sendBtn.onclick = async () => {
    document.body.append(spinner)
    const response = await fetch('http://localhost:3000/api/request', {
        method: 'POST'
    })
    if (response.ok) {
        alert(await response.text())
        spinner.remove()
    }
}