
let userInfo = document.getElementById("userInfo");
let forTable = document.createElement("tbody");
fetch("http://localhost:7712/user")
    .then((response) => {
        return response.json();
    })
    .then((user) => {
        forTable.innerHTML = ` <tr>
            <th>${user.id}</th>
            <th>${user.name}</th>
            <th>${user.email}</th>
            <th>${user.address}</th>
            </tr>
            `;

        userInfo.append(forTable);
    });


let addModal = document.getElementById("addUserModal");

// Получить кнопку, которая открывает модальный
let btn2 = document.getElementById("myBtn2");

// Получить элемент <span>, который закрывает модальный
let span2 = document.getElementsByClassName("close")[1];

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
const cancelSubmit =document.getElementById("cancelSubmit");
const btnSubmit = document.getElementById("btnSubmit");
let userTable = document.getElementById("userTable");
const deleteForm =document.getElementById("deleteForm");
let data = []

let inputName = document.getElementById("inputName");
let inputAddress = document.getElementById("inputAddress");
let inputEmail = document.getElementById("inputEmail");

let inputNameD = document.getElementById("inputName1");
let inputAddressD = document.getElementById("inputAddress1");
let inputEmailD = document.getElementById("inputEmail1");


fetch(url + "/admin/list")
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
 
<button type="button" class="btn btn-outline-danger"  onclick="del(${users[i].id}, '${users[i].name}','${users[i].email}','${users[i].address}')">Delete</button> 
<button type="button" class="btn btn-outline-primary" onclick="update(${users[i].id},'${users[i].name}','${users[i].email}','${users[i].address}')">Edit</button>
 </tr>
`
            userTable.append(forButton);
        }
    });

addUserForm.addEventListener("submit", (event) => {
    fetch(url + "/admin/add", {
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
        fetch('http://localhost:7712/admin/edit/', {
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


// Получить модальный
let deleteModal = document.getElementById("deleteModal");

// Получить кнопку, которая открывает модальный
let deleteButton = document.getElementById("delete-btn");


// Получить элемент <span>, который закрывает модальный
let span3 = document.getElementsByClassName("close")[2];
span3.onclick = function () {
    deleteModal.style.display = "none";
};
cancelSubmit.onclick = function () {
    deleteModal.style.display = "none";
};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
    if (event.target == deleteModal) {
        deleteModal.style.display = "none";
    }
};


function del(id, name, email, address){
    inputNameD.value = name;
    inputEmailD.value = email;
    inputAddressD.value = address;
    deleteModal.style.display = "block";


    deleteForm.addEventListener("click", (event) => {
    fetch(url + "/admin/delete/" + id, {
                method: "DELETE",
            })
                .then((response) => response.json())


    })
};







