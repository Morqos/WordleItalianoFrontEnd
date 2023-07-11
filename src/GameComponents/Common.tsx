export const NOT_SELECTED = 0
export const NOT_PRESENT = -1
export const PRESENT_WRONG_PLACE = 1
export const PRESENT_RIGHT_PLACE = 2

export type letterToPresence = {
  [letter: string]: number
}

export type presenceToColor = {
  [presence: number]: string
}

export const mapPresenceToColor: presenceToColor = {};

mapPresenceToColor[NOT_SELECTED] = "#818384"
mapPresenceToColor[NOT_PRESENT] = "#3A3A3C"
mapPresenceToColor[PRESENT_WRONG_PLACE] = "#b59f3b"
mapPresenceToColor[PRESENT_RIGHT_PLACE] = "#538d4e"


const mapLetterToPresence: letterToPresence = {};

mapLetterToPresence['Q'] = NOT_SELECTED;
mapLetterToPresence['W'] = NOT_SELECTED;
mapLetterToPresence['E'] = NOT_SELECTED;
mapLetterToPresence['R'] = NOT_SELECTED;
mapLetterToPresence['T'] = NOT_SELECTED;
mapLetterToPresence['Y'] = NOT_SELECTED;
mapLetterToPresence['U'] = NOT_SELECTED;
mapLetterToPresence['I'] = NOT_SELECTED;
mapLetterToPresence['O'] = NOT_SELECTED;
mapLetterToPresence['P'] = NOT_SELECTED;

mapLetterToPresence['A'] = NOT_SELECTED;
mapLetterToPresence['S'] = NOT_SELECTED;
mapLetterToPresence['D'] = NOT_SELECTED;
mapLetterToPresence['F'] = NOT_SELECTED;
mapLetterToPresence['G'] = NOT_SELECTED;
mapLetterToPresence['H'] = NOT_SELECTED;
mapLetterToPresence['J'] = NOT_SELECTED;
mapLetterToPresence['K'] = NOT_SELECTED;
mapLetterToPresence['L'] = NOT_SELECTED;

mapLetterToPresence['Z'] = NOT_SELECTED;
mapLetterToPresence['X'] = NOT_SELECTED;
mapLetterToPresence['C'] = NOT_SELECTED;
mapLetterToPresence['V'] = NOT_SELECTED;
mapLetterToPresence['B'] = NOT_SELECTED;
mapLetterToPresence['N'] = NOT_SELECTED;
mapLetterToPresence['M'] = NOT_SELECTED;

export default mapLetterToPresence;