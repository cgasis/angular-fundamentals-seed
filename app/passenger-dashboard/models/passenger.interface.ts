 export interface Passenger {
    id: number,
    fullname: string,
    checkin: boolean,
    checkedindate: number | null, 
    baggage: string
}