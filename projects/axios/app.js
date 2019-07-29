const {
    log
} = console

const config = {
    name: 'jonathan'
}

const todoData = {}
// DELETE
const listOfTodos = document.getElementById('list')
listOfTodos.addEventListener('click', e=>{
    if(e.target.parentNode.id==='delete-button'){
        log(e.target.id)
    }
    axios.delete(`https://api.vschool.io/${config.name}/todo/${e.target.id}`)
    getTodos()
})

// FORM SUBMIT HANDLER to POST TO API
const form = document.addTodo
form.addEventListener('submit', e => {
    e.preventDefault()

    let newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
        completed: form.completed.checked
    }
    axios.post(`https://api.vschool.io/${config.name}/todo/`, newTodo).then(res => {
        log(res.data)
        getTodos()
    })
})


// GET TODOS FROM API
function getTodos() {
    axios.get(`https://api.vschool.io/${config.name}/todo/`).then(res => {
        updateTodoList(res.data)
    })
}

function updateTodoList(data){
    let tbody = document.getElementById('list')
    clearUL(tbody)
    data.forEach((e,i)=>{
        let tr = document.createElement('div')
        tr.innerHTML = `
        <div class="list-element">
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
            <i class="material-icons">check_circle_outline</i>
            </button>
        </div>
        <div class="list-element">
            <span class="mdl-checkbox__label">${e.title}</span>
        </div>
        <div class="list-element">
            <i class="todo-description">${e.description||!undefined&&""}</i>
        </div>
        <div class="list-element right">
            <button id="delete-button" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                <i id="${e._id}" class="material-icons">backspace</i>
            </button>
        </div>
        `
        tr.className = "mdl-list__item"
        tr.id = e._id
        tbody.appendChild(tr)
    })
}

function clearUL(ul){
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

    // res.data.forEach(e => {
    // let str = `${e.title!=undefined?e.title:'-'}
    // - ${e.description!=undefined?e.description:'---'} 
    // - ${e.price!=undefined?'$'+e.price:'ask for price'}`
    // if(e.completed){
    //     let strike = document.createElement('strike')
    //     strike.textContent = str
    //     li.appendChild(strike)
    // }else{
    //     li.textContent = str
    // }

    // let img = document.createElement('img')
    // try {
    //     let imgUrl = new URL(e.imgUrl)
    //     img.src = imgUrl
    //     li.appendChild(img)
    //     log(imgUrl)
    // } catch (error) {}


    // ul.appendChild(li)

    // log([
    //     e.title,
    //     e.sessionId,
    //     e._id,
    //     e.completed
    // ])
    // })
    // }).catch(e => {
    // log(e)
    // })



    getTodos()


































































    // POST
    // axios.post('http://api.vschool.io/jonathan/todo/', newTodo).then(res=>{
    //     // log(res)
    // })

    // GET
    // function getTodo(name){
    //     axios.get(`http://api.vschool.io/${name}/todo`).then(res=>{
    //         log(res)
    //         return res
    //     })
    // }

    // PUT
    // const id = '5d3f1883f13a5b4272715058'
    // const editedTodo = {
    //     completed: true
    // }
    // axios.put(`http://api.vschool.io/jonathan/todo/${id}`, editedTodo).then(res=>{
    //     log(res)
    // })

    // DELETE
    // axios.delete(`http://api.vschool.io/sam/todo/${id}`)