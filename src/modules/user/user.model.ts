class User {
    constructor(
        public id: string,
        public name: string,
        public email: string
    ) {}

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}