import { createAction, createReducer, on } from "@ngrx/store";


export const  paragraphReducer=createReducer(
    {showParagraph:false},
    on(createAction('SHOWP'), state=>{
        // console.log('Action Changed');
        
        return{
            ...state,
            showParagraph:!state.showParagraph
        }
    })
)