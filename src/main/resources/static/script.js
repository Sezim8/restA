// Получить модальный
let addModal = document.getElementById("addUserModal");

// Получить кнопку, которая открывает модальный
let btn2 = document.getElementById("myBtn2");

// Получить элемент <span>, который закрывает модальный
let span2 = document.getElementsByClassName("close")[1];

// Когда пользователь нажимает на кнопку, откройте модальный
btn2.onclick = function () {
    addModal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span2.onclick = function () {
    addModal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
    if (event.target == addModal) {
        addModal.style.display = "none";
    }
}


/*-----------------/*/
const addUserForm = document.getElementById("userForm");
const editUserForm = document.getElementById("editForm");
const url = 'http://localhost:7712';
const userList = document.getElementById("tableUser");
const deleteBtn = document.getElementById("delete-btn");

const btnSubmit = document.getElementById("btnSubmit");
let userTable = document.getElementById("userTable");
let data = []

let inputName = document.getElementById("inputName");
let inputAddress = document.getElementById("inputAddress");
let inputEmail = document.getElementById("inputEmail");
console.log(editUserForm[0].value);
fetch(url + "/list")
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        for (let i = 0; i < users.length; i++) {
            let forButton = document.createElement("tr");
            forButton.innerHTML = `<tr>                                                            
<th id="idElement">${users[i].id}</th>
<th id="userName">${users[i].name}</th>
<th id="email">${users[i].email}</th>
<th id="address">${users[i].address}</th>
 
<button id="delete-btn" type="button" class="btn btn-outline-danger"  onclick="del(${users[i].id})">Delete</button> 
<button id="myBtn" type="button" class="btn btn-outline-primary" onclick="update(${users[i].id},'${users[i].name}','${users[i].email}','${users[i].address}')">Edit</button>
 </tr>
`
            userTable.append(forButton);
        }
    });
addUserForm.addEventListener("submit", (event) => {
    fetch(url + "/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: addUserForm[0].value,
            email: addUserForm[1].value,
            address: addUserForm[2].value
        })
    })
        .then((response) => {
            console.log(response.json());
        })
});


function del(id)//Любая функция
{
    if (confirm('Удалить?'))
        /*функция со всплывающим окном
        с выбором действий "ок" или "отмена"*/
    {
        if (confirm('Вы уверены? Удалить?')) {
            fetch(url + "/delete/" + id, {
                method: "DELETE",
            })
                .then((response) => {
                    location.reload()
                })
        }
    }
};

// Получить модальный
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный


// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
    modal.style.display = "none";
}


// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function update(id, name, email, address) {
    inputName.value = name;
    inputEmail.value = email;
    inputAddress.value = address;
    modal.style.display = "block";

    editUserForm.addEventListener("submit", (e) => {
        fetch('http://localhost:7712/edit/', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: inputName.value,
                email: inputEmail.value,
                address: inputAddress.value
            })
        })
            .then(res => res.json())

    });
};

