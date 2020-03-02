import {Action} from "redux";

export type ActionFilter<T extends Action = Action> = (action: T) => boolean;

export const isError: ActionFilter = ({type}: Action) => /^[A-Z_]+_(ERROR)$/i.test(type);
