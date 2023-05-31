import {  createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Property } from "src/app/Interfaces";
import * as PropertyActions from '../Actions/propertyActions'

export interface PropertyInterface{
    properties:Property[]
    getPropertyError:string
    addPropertySuccess:string
    addPropertyFailure:string
    updatePropertySuccess:string
    updatePropertyFailure:string
    propertyId:string
}


const initialState:PropertyInterface={
    properties:[],
    getPropertyError:'',
    addPropertyFailure:'',
    addPropertySuccess:'',
    updatePropertyFailure:'',
    updatePropertySuccess:'',
    propertyId:''
}


//selectors
const getPropertyState= createFeatureSelector<PropertyInterface>('property')
export const getProperties= createSelector(getPropertyState,(state)=>state.properties)
export const getPropError= createSelector(getPropertyState,(state)=>state.getPropertyError)
export const getPropertyId= createSelector(getPropertyState,(state)=>state.propertyId)
export const getProperty= createSelector(getProperties,getPropertyId,(properties,id)=>properties.find(p=>p.id===id) as Property)



export const propertyReducer= createReducer(
   initialState,
   on(PropertyActions.GetPropertysSuccess, (state,action):PropertyInterface=>{
        return{
            ...state,
            getPropertyError:'',
            properties:action.Properties
        }
   }),
   on(PropertyActions.GetPropertysFailure, (state,action):PropertyInterface=>{
    return{
        ...state,
        getPropertyError:action.errorMessage,
        properties:[]
    }
}),

on(PropertyActions.GetSingleProperty, (state,action):PropertyInterface=>{
    return{
        ...state,
        propertyId:action.id
    }
}),
on(PropertyActions.AddpropertySuccess, (state,action):PropertyInterface=>{
    return{
        ...state,
        addPropertyFailure:'',
        addPropertySuccess:action.message
    }
}),

on(PropertyActions.AddpropertyFailure, (state,action):PropertyInterface=>{
    return{
        ...state,
        addPropertyFailure:action.message,
        addPropertySuccess:' '
    }
}),

on(PropertyActions.UpdatePropertySuccess, (state,action):PropertyInterface=>{
    return{
        ...state,
       updatePropertyFailure:'',
       updatePropertySuccess:action.message
    }
}),

on(PropertyActions.UpdatePropertyFailure, (state,action):PropertyInterface=>{
    return{
        ...state,
        updatePropertyFailure:action.message,
        updatePropertySuccess:' '
    }
})
    
)