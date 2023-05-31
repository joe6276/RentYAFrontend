import { createAction, props } from "@ngrx/store";
import { AddProperty, Property } from "src/app/Interfaces";


export const GetProperty = createAction('[Property]-GetProperty')
export const GetPropertysSuccess = createAction('[Property]-GetPropertySuccess',props<{Properties:Property[]}>())
export const GetPropertysFailure = createAction('[Property]-GetPropertyFailure', props<{errorMessage:string}>())

export const GetMyProperty = createAction('[MyProperty]-GetProperty')
export const GetMyPropertySuccess = createAction('[MyProperty]-GetMyPropertySuccess',props<{Properties:Property[]}>())
export const GetMyPropertyFailure = createAction('[MyProperty]-GetMyPropertyFailure', props<{errorMessage:string}>())

export const Addproperty = createAction('[AddProperty]-Addproperty', props<{newProperty:AddProperty}>())
export const AddpropertySuccess = createAction('[AddProperty]-AddpropertySuccess',props<{message:string}>())
export const AddpropertyFailure = createAction('[AddProperty]-AddpropertyFailure', props<{message:string}>())


export const UpdateProperty = createAction('[AddProperty]-UpdateProperty', props<{id:string,updatedProperty:AddProperty}>())
export const UpdatePropertySuccess = createAction('[AddProperty]-UpdatePropertySuccess',props<{message:string}>())
export const UpdatePropertyFailure = createAction('[AddProperty]-UpdatePropertyFailure', props<{message:string}>())


export const deleteProperty = createAction('[Single Component]-deleteProperty', props<{id:string}>())
export const deletePropertySuccess = createAction('[Single Component]-deletePropertySuccess',props<{message:string}>())
export const deletePropertyFailure = createAction('[Single Component]-deletePropertyFailure', props<{message:string}>())



export const GetSingleProperty = createAction('[SingleProperty]-GetSimgleProperty', props<{id:string}>())