// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.
export class MovieStore{
    inventory: Array<any>;
    totalCost: number;
    constructor(inventory, totalCost){
        this.inventory = inventory;
        this.totalCost = totalCost;
    }

    getMovies() {
        return 'honk';
    }

    addMovie(movie){
        this.inventory.push(movie);
    }
}