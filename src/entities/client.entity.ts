
export class ClientEntity {
    private id!: number;
    private uuid!: string;
    private name!: string;
    private email!: string;
    private cpf!: string;
    private photo!: string;
    private isEnabled!: boolean;

    getId(): number {
        return this.id;
    }

    getUuid(): string {
        return this.uuid;
    }

    getName(): string {
        return this.name;
    }

    getPhoto(): string {
        return this.photo;
    }

    getIsEnabled():boolean {
        return this.isEnabled
    }

    getEmail(): string {
        return this.email
    }

    getCpf(): string {
        return this.cpf
    }

    setId(id: number): void {
        this.id = id;
    }

    setUuid(uuid: string): void {
        this.uuid = uuid;
    }

    setName(name:string): void {
        this.name = name;
    }

    setPhoto(photo: string): void {
        this.photo = photo;
    }

    setIsEnabled(isEnabled: boolean):void {
        this.isEnabled = isEnabled
    }
    
    setEmail(email: string): void {
        this.email = email
    }
    
    setCpf(cpf: string): void {
        this.cpf = cpf
    }
}