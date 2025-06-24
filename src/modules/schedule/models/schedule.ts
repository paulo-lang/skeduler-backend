class Schedule {
    constructor(
        public id: string,
        private appointments: Appointment[] = []
    ){}

    public getId(): string {
        return this.id;
    }

    public getAppointments(): Appointment[] {
        return this.appointments;
    }

    public setAppointments(appointments: Appointment[]): void {
        this.appointments = appointments;
    }
}