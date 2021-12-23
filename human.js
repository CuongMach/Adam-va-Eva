class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    say(text) {
        alert(text);
    }

    eat(apple) {
        if (this.check(apple)) {
            this.weight++;
            apple.weight--;
        }

    }

    check(apple) {
        return apple.getWeight() > 0;
    }
}