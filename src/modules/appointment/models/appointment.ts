class Appointment {
    constructor(
        public id: string,
        public dateTime: Date,
        public clientNumber: string,
        public clientName: string,
        public serviceId: string,
        public isPaid: boolean = false,
    ){}

    getId(): string {
        return this.id;
    }

    getDateTime(): Date {
        return this.dateTime;
    }

    setDateTime(dateTime: Date): void {
        this.dateTime = dateTime;
    }

    getClientNumber(): string {
        return this.clientNumber;
    }

    setClientNumber(clientNumber: string): void {
        this.clientNumber = clientNumber;
    }

    getClientName(): string {
        return this.clientName;
    }

    setClientName(clientName: string): void {
        this.clientName = clientName;
    }

    getServiceId(): string {
        return this.serviceId;
    }

    setServiceId(serviceId: string): void {
        this.serviceId = serviceId;
    }

    getIsPaid(): boolean {
        return this.isPaid;
    }

    setIsPaid(isPaid: boolean): void {
        this.isPaid = isPaid;
    }
}