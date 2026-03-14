const books = []

const tabelaCorpo = document.querySelector("#books tbody");
const addBtn = document.querySelector("#add");
const modal = document.querySelector("#modal-container");
const submitBtn = document.querySelector("#submit");
const cancelBtn = document.querySelector("#cancel");

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const checkRead = document.querySelector("#read");

function Book(title, author, pages, read) {

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function addBooksToLibrary(t, a, p, r){
    const book = new Book(t, a, p, r);
    books.push(book);
}

function display(){

    tabelaCorpo.innerHTML = "";
   
    for(let i = 0; i < books.length; i++){
        const novaLinha = document.createElement("tr");
        novaLinha.id = "novaLinha";
        const celulaId = document.createElement("td");
        const celulaTitulo = document.createElement("td");
        const celulaAutor = document.createElement("td");
        const celulaPages = document.createElement("td");
        const celulaRead = document.createElement("td");
        const celulaDelete = document.createElement("td");

        const removeBtn = document.createElement("button");
        removeBtn.className="removeBtn"; removeBtn.textContent = "X";

        removeBtn.onclick = () => {
            books.splice(i, 1);
            display();
        };

        const celulaToggle = document.createElement("td");
        const toggleRead = document.createElement("input");
        toggleRead.type = "checkbox"; toggleRead.className = "toggle";

        celulaId.textContent = books[i].id;
        celulaTitulo.textContent = books[i].title;
        celulaAutor.textContent = books[i].author;
        celulaPages.textContent = books[i].pages;
        
        if(books[i].read == false){
            celulaRead.textContent = "Não lido";
            toggleRead.checked = false;
        }
        else{
            celulaRead.textContent = "Já leu";
            toggleRead.checked = true;
        }

        novaLinha.appendChild(celulaId);
        novaLinha.appendChild(celulaTitulo);
        novaLinha.appendChild(celulaAutor);
        novaLinha.appendChild(celulaPages);
        novaLinha.appendChild(celulaRead);
        // novaLinha.appendChild(removeBtn);

        celulaDelete.appendChild(removeBtn);
        novaLinha.appendChild(celulaDelete);

        celulaToggle.appendChild(toggleRead);
        novaLinha.appendChild(celulaToggle);

        tabelaCorpo.appendChild(novaLinha);
    }
}

addBtn.addEventListener('click', function(){
    modal.classList.replace("modal-hidden", "modal-visible");
});

cancelBtn.addEventListener('click', function(){
    modal.classList.replace("modal-visible", "modal-hidden");
});

submitBtn.addEventListener('click', (event) => {

    event.preventDefault();

    const t = inputTitle.value;
    const a = inputAuthor.value;
    const p = inputPages.value;
    const r = checkRead.checked;

    modal.classList.replace("modal-visible", "modal-hidden");

    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    checkRead.checked = false;

    addBooksToLibrary(t, a, p, r);
    display();
});