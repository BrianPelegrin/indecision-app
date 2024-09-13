
interface IMessage{
    id:string;
    isOwnMessage:boolean;
    message:string;
    imgSrc?:string;
}

interface IAnswer{
    answer:string;
    forced:boolean;
    image:string;
}

interface IAppConfig{
    appColor:string;
    messageColor:string;
    contactMessageColor:string;
    backgrounImage?:string;
}


export type {
    IMessage,
    IAppConfig,
    IAnswer
}