 
    
    export interface LandLord{
        id:string
        name:string
        email:string
        propertyDocs:string
        isDeleted:number
        approved:number
        password:string
        emailSent:string
    }
    

    export interface AddLandlord{
        name:string
        email:string
        propertyDocs:string
        password:string
    }

    
    export interface Property {
        id:string
        isDeleted:number
        name:string,
        location:string
        lat:string
        lon:string
        images:string
        videos:string
        price:number
        condition:string
        owner:string
    }
    export interface AddProperty {
        name:string,
        location:string
        lat:string
        lon:string
        images:string
        videos:string
        price:number
        condition:string
    }

    export interface User{
        id:string
        name:string
        email:string
        roles:string
        isDeleted:number
        password:string
        emailSent:string
    }

    
    export interface NewUser{
        name:string
        email:string
        password:string
    }

    export interface AddUserSuccess{
        message:string
    }
    
    export interface AddPropertySuccess{
        message:string
    }
    export interface LoginUser{
        email:string
        password:string
       
    }
    export interface LogUserSuccess{
        token:string
        role:string
        username:string
    }

    export interface LogLandlordSuccess{
        token:string
        role:string
        message:string
    }

    export interface AdminSuccess{
        message:string
    }

    export interface LandLordSuccess{
        message:string
    }
    
    