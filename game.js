class Game {
    constructor() {
        this.options = ['apple', 'hamburger', 'hot dog', 'banana', 'chocolate',
                        'strawberries', 'french fries', 'pancakes', 'ice cream',
                         'bacon', 'chips', 'stinky tofu', 'scallion pancake'];
                         
        this.showCounter = {};
        this.selectedCounter = {};

        this.initializeCounters();
    };

    initializeCounters() {
        this.options.forEach((ele, i) => {
            this.showCounter[i] = 0;
            this.selectedCounter[i] = 0;
        });
    };

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    presentOptions() {
        const firstIndex = this.getRandomInt(this.options.length);
        const secondIndex = this.getRandomInt(this.options.length);
        if (firstIndex !== secondIndex) {
            this.showCounter[firstIndex]++;
            this.showCounter[secondIndex]++;
            return [this.options[firstIndex], this.options[secondIndex]];
        } else {
            return this.presentOptions();
        }
    };

    selectOption(option) {
        const selectedIndex = this.options.indexOf(option);
        this.selectedCounter[selectedIndex]++; 
    };

    presentStats() {
        let stats = [];
        this.options.forEach((ele, i) => {
            stats.push([ele, this.selectedCounter[i], this.showCounter[i]])
        });
        return stats;
    }

};

export default Game;