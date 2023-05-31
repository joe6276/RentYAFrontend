import { CounterInterface } from "./Reducers/counterReducer";
import { ParagraphInterface } from "./Reducers/paragraphReducer";
import { PropertyInterface } from "./Reducers/propertyReducer";
import { UserInterface } from "./Reducers/userReducer";

export interface AppState{
    counter:CounterInterface
    paragraph:ParagraphInterface
    property:PropertyInterface
    user:UserInterface
}