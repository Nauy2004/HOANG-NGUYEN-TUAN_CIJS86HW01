const userApi = "https://649c5833048075719237fecf.mockapi.io/san-pham";

function starts() {  
    getUser(randerItem);

    handlAddNewUsers();

    checkUserPhone();

    handlesearch();
}
starts();

// lấy data từ mockApi
function getUser(callblack) {
    fetch(userApi)
        .then((reponse) =>{
            return reponse.json();
        })
        .then(callblack);
    }

function handlAddNewUsers() {
    let btnAdd = document.getElementById('add');
    btnAdd.addEventListener("click",()=>{
        let inputName = document.getElementById('user-name').value;
        let inputPhone = document.getElementById('user-number-phone').value;
        let obj = (getObj(inputName,inputPhone))
        createItem(obj,() => getUser(randerItem))
})
}

function getObj(value,value2) {
    let obj = {
        name: value,
        phone: value2
    }
    return obj
}

function randerItem(items) {
    let list = document.querySelector(".list-items");
    let htmls = items.map((item)=>{
        return `
        <div class="item d-flex justify-content-between align-items-center rounded-3 bg-info">
            <div class="phone-name text-white text-center"><h6>${item.name}</h6></div>
            <div class="phone-number text-white text-center"><h6>${item.phone}</h6></div>
        </div>
        `;  
    })
    list.innerHTML = htmls.join('');
   
}

function createItem(data, callblack) {
    const option = {
        method : 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(data)
    };
    fetch(userApi, option)
        .then((reponse)=>{
            reponse.json
        })
        .then(callblack);
}

function handleDeleteItem(id) {
    const option = {
        method : 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    };
    fetch(userApi + '/' + id, option)
        .then((reponse)=>{
            reponse.json
        })
        .then(()=>{
            getUser(randerItem);
        });
}

function checkUserPhone() {
    let btnDelete = document.getElementById('delete');
    btnDelete.addEventListener('click', ()=>{
        let inputSearch = document.getElementById('search').value;
        getUser((users) =>{
            let arrId = []
            for (const item of users) {
                if (item.phone === inputSearch) {
                    arrId.push(item.id);
                }
            }
            arrId.sort()
            // sdt có id nhỏ nhất khỏi mảng 
            delete arrId[0]; 
            // xóa các obj có id = các element trong arrId
            arrId.forEach(element => {
               handleDeleteItem(element);
            });
        })
    })
}

// xử lý được các đầu vào đúng với data có sẵn
function handlesearch() {
    let btnSearch = document.getElementById('btn-search');
    btnSearch.addEventListener('click', ()=>{
        let inputSearch = document.getElementById('search').value;
        getUser((users) =>{
            let arrId = []
            for (const item of users) {
                if (item.name.toUpperCase() === inputSearch.toUpperCase() || item.phone.toUpperCase() === inputSearch.toUpperCase()) {
                    arrId.push(item);
                }
            }
            if (inputSearch === "") {
                randerItem(users)
            }else{
                arrId.sort()
                randerItem(arrId);
            }
        })
    })
}