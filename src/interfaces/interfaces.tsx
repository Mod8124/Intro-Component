export interface ICta {
    title:string,
    para:string,
}

export interface IButton {
    color:string,
    content?:string,
    strong?:string
}

export interface IError {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    msg:any
}

export interface IColor {
    primary:{
        Red:string,
        Green:string
    },
    accent:{
        Blue:string
    },
    neutral:{
        DarkBlue:string,
        GrayishBlue:string
    }
}

export interface IFormInput {
    firstName:string,
    lastName:string,
    email:string,
    password:string
}
