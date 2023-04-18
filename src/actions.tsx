import { CHANGE_SEARCHFIELD } from "./constants"

export const setSearchField = (text: string) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
})