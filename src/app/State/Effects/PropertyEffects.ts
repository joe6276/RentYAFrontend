import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PropertiesService } from "src/app/Services/properties.service";
import * as PropertyActions from '../Actions/propertyActions'
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
@Injectable()
export class  PropertyEffects{

    constructor(private action$:Actions, private propertySevice:PropertiesService){}

    getProperties$=createEffect(()=>{
        return this.action$.pipe(
            ofType(PropertyActions.GetProperty),
            mergeMap(action=>{
               return this.propertySevice.getProperties().pipe(
                //success
                map(Properties=>{
                    return PropertyActions.GetPropertysSuccess({Properties})
                }),
                //error
                catchError(error=> of(PropertyActions.GetPropertysFailure({errorMessage:error})) )
               ) 
            })
        )
    })

  addProperty$ =createEffect(()=>{
    return this.action$.pipe(
        ofType(PropertyActions.Addproperty),
        concatMap(action=>{
            return this.propertySevice.addProperty(action.newProperty).pipe(
                map(m=>PropertyActions.AddpropertySuccess({message:m.message})),
                catchError(error=>of(PropertyActions.AddpropertyFailure({message:error})))
            )
        }),

        //Refresh Behaviour
        switchMap(()=>[PropertyActions.GetProperty()])

    )
  })

  updateProperty$= createEffect(()=>{
    return this.action$.pipe(
        ofType(PropertyActions.UpdateProperty),
        mergeMap(action=>{
            return this.propertySevice.updateProperty(action.id,action.updatedProperty).pipe(
                map(ms=>PropertyActions.UpdatePropertySuccess({message:ms.message})),
                catchError(error=>of(PropertyActions.UpdatePropertyFailure({message:error})))
            )
        })
    )
  })

  deleteProperty$= createEffect(()=>{
    return this.action$.pipe(
        ofType(PropertyActions.deleteProperty),
        mergeMap(action=>{
            return this.propertySevice.deleteProperty(action.id).pipe(
                map(ms=>PropertyActions.deletePropertySuccess({message:ms.message})),
                catchError(error=>of(PropertyActions.deletePropertyFailure({message:error})))
            )
        })
    )
  })

  myProperties$= createEffect(()=>{
    return this.action$.pipe(
        ofType(PropertyActions.GetMyProperty),
        mergeMap(action=>{
            return this.propertySevice.getmyProperties().pipe(
                map(Properties=>PropertyActions.GetMyPropertySuccess({Properties})),
                catchError(error=>of(PropertyActions.GetMyPropertyFailure({errorMessage:error})))
            )
        })
    )
  })
}