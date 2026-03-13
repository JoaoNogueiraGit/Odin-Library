const books = []

const tabela = document.querySelector("#books");
// const tabelaCorpo = document.querySelector("#books td");
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

    // if(books.length > 0){
    //      tabelaCorpo.innerHTML = "";
    // }
   
    for(let i = 0; i < books.length; i++){
        const novaLinha = document.createElement("tr");
        const celulaId = document.createElement("td");
        const celulaTitulo = document.createElement("td");
        const celulaAutor = document.createElement("td");
        const celulaPages = document.createElement("td");
        const celulaRead = document.createElement("td");

        celulaId.textContent = books[i].id;
        celulaTitulo.textContent = books[i].title;
        celulaAutor.textContent = books[i].author;
        celulaPages.textContent = books[i].pages;
        
        if(books[i].read == false){
            celulaRead.textContent = "Não lido";
        }
        else{
            celulaRead.textContent = "Já leu";
        }
        
        novaLinha.appendChild(celulaId);
        novaLinha.appendChild(celulaTitulo);
        novaLinha.appendChild(celulaAutor);
        novaLinha.appendChild(celulaPages);
        novaLinha.appendChild(celulaRead);

        tabela.appendChild(novaLinha);
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