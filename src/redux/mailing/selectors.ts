import { RootState } from "../store";

export const selectorMailingSuccess = (state: RootState) => state.contact.isSended;
export const selectorMailingSendingNow = (state: RootState) => state.contact.isSendingNow;
export const selectorMailingError = (state: RootState) => state.contact.isError;
