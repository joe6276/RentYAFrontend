import { createAction, props } from "@ngrx/store";
import { AddLandlord, LogLandlordSuccess, LogUserSuccess, LoginUser } from "src/app/Interfaces";


export const CreateALandLord= createAction('[Landlord-Registration] - add a New Landlord' ,props<{newLandLord:AddLandlord}>())
export const CreateALandLordSuccess= createAction('[Landlord-Registration] - add a New Landlord Success ' ,props<{message:string}>())
export const CreateALandLordFailure= createAction('[Landlord-Registration] - add a New Landlord Failure ' ,props<{message:string}>())



export const LoginLandLord= createAction('[Landlord-Login] - login Landlord' ,props<{landlord:LoginUser}>())
export const LoginLandLordSuccess= createAction('[Landlord-Login] - login Landlord Success ' ,props<{res:LogLandlordSuccess}>())
export const LoginLandLordFailure= createAction('[Landlord-Login] - login Landlord Failure ' ,props<{message:string}>())