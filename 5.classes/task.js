class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
		this.name = name;
		this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
	}

    fix(){
		this.state = this.state * 1.5;
        if (this.state > 100) {
            this.state = 100;
        } 
        return this.state;
     
	}

    set state(state){
		
        if (state < 0) {
            state = 0;
        } else if (state > 100) {
            state = 100;
        } 

        this._state = state;
        
	}

    get state() {
        return this._state;
    }
    

}



class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "magazine";
        
    }

}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null){
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "book";
        this.author = author;
    }

}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null){
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "novel";
        this.author = author;
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null){
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "fantastic";
        this.author = author;
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null){
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "detective";
        this.author = author;
    }
}

class Library{
    constructor(name, books = []){
        this.name = name;
        this.books = books;
    }

    addBook(book){
        if (book._state > 30) {
            this.books.push(book);
        }
        
    }
    
    findBookBy(type, value){
        let result = this.books.find(element => element[type] === value);
        if (result) {
            return result;
        } else {
            return null;
        }
        
        
    }

    giveBookByName(bookName){
       const givenBook = this.books.find(element => element.name === bookName);
       const givenBook1 = this.books.findIndex(element => element.name === bookName);
       this.books.splice(givenBook1, 1); 
       
       if (givenBook) {
        return givenBook;
        
       } else {
        return null;
       }

            
    }
}
