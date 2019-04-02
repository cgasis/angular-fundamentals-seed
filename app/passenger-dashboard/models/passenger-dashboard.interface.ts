export interface Child {
    name: string,
    age: number
}

export interface Passenger {
    id: number,
    name: string,
    checkin: boolean,
    checkedindate: number | null,
    children: Child[] | null
}