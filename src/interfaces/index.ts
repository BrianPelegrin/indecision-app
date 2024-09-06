interface IUser {
    id:string;
    userName:string;
    profileImage:string;
    isOnline:boolean;    
}

interface IMessage{
    id:string;
    user:IUser;
    message:string;
}

interface IAppConfig{
    toolbarColor:string;
    ownMessageColor?:string;
    usersMessageColor?:string;
    profileImage:string;
    backgrounImage?:string;
}


export type {
    IUser,
    IMessage,
    IAppConfig,
}