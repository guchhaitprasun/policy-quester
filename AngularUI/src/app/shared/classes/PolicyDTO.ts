export class PolicyDTO {

    constructor(){
        this.bodilyinjuryliability = false
        this.collision = false
        this.comprehensive = false
        this.customer = null
        this.customerid = 0
        this.dateofpurchase = ''
        this.fueltype = 0
        this.id = 0
        this.personinjuryprotection = false
        this.premium = 0
        this.propertydamageliability = false
        this.vehicletype = 0

    }

    bodilyinjuryliability: boolean 
    collision: boolean 
    comprehensive: boolean 
    customer: any
    customerid: number
    dateofpurchase: string
    fueltype: number
    id: number
    personinjuryprotection: boolean 
    premium: number
    propertydamageliability: boolean 
    vehicletype: number
}