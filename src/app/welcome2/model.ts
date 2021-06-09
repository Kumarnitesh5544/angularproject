interface abc{
    offer: string,
    isEnable:boolean,
    isbold:boolean

}

export interface priceObj{
     planName: string,
     currency: string,
     price: number,
     period: string,
     offers:Array<abc>
}