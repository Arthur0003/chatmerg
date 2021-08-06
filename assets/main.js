const socket = io()
const messages = document.querySelector('.messages')
const send = document.querySelector('.send')
const input = document.querySelector('.messageInput')
const userName = prompt('Write your name:')

send.addEventListener('click', () => {
    if (input.value.trim()) {
        socket.emit('chat message', {
            message: input.value,
            name: userName
        })
    }
    input.value = ''
})

socket.on('chat message', (data) => {
    const elem = document.createElement('li')
    elem.classList.add('messages__elem')
    elem.innerHTML = `${data.name}: &nbsp; ${data.message}`
    elem.addEventListener('click', deleteElem)
    messages.append(elem)
})

function deleteElem(e) {
    const el = e.target
    el.remove()
}