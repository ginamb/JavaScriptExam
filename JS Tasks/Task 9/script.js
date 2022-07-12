/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        const { title, director, budget } = this;
        if (movie4.budget > 100000000) {
            // return `${this.title} was directed by ${this.director} and get budget${this.budget}`
            return `${true}`
        } else {
            return `${false}`
            // return `${this.title} was directed by ${this.director} and get budget${this.budget}`
        }
    }
}

const movie4 = new Movie('The Dark Knight', 'Nolan', 105000000);