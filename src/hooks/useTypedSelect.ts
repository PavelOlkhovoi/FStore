import {TypedUseSelectorHook, useSelector} from "react-redux";
import { State } from "../store";


export const useTypedSelector: TypedUseSelectorHook<State> = useSelector