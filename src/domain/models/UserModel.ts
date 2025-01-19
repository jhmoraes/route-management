
export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private type: string,
        private password: string,
    ){}

    public getId(): string {
        return this.id
    }
    public getName(): string {
        return this.name
    }
    public getEmail(): string {
        return this.email
    }
    public getType(): string {
        return this.type
    }
    public getPassword(): string {
        return this.password
    }

    public setId(value: string): void {
        this.id = value
    }
    public setName(value: string): void {
        this.name = value
    }
    public setEmail(value: string): void {
        this.email = value
    }
    public setType(value: string): void {
        this.type = value
    }
    public setPassword(value: string): void {
        this.password = value
    }
}