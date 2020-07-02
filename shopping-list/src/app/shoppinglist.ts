export class Shoppinglist {
    viewDetails: boolean;
    constructor (
        public item: string, 
        public quantity: string,
        public aproximateprice: string,
        public elapse: Date,
    ) {
        this.viewDetails = false;
    }
    }

