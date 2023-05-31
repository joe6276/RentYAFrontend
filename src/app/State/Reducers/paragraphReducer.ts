import { createAction, createReducer, on } from "@ngrx/store";

export interface ParagraphInterface{
    showParagraph:boolean
}

const initialState:ParagraphInterface={
    showParagraph:false
}
export const  paragraphReducer=createReducer(
    initialState,
    on(createAction('SHOWP'), (state):ParagraphInterface=>{
        // console.log('Action Changed');
        
        return{
            ...state,
            showParagraph:!state.showParagraph
        }
    })
)