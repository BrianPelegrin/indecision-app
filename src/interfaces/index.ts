
interface IMessage{
    id:string;
    isOwnMessage:boolean;
    message:string;
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
}