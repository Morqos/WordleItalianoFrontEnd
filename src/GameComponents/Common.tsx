export const NOT_SELECTED = 0
export const NOT_PRESENT = -1
export const PRESENT_WRONG_PLACE = 1
export const PRESENT_RIGHT_PLACE = 2

type letterToPresence = {
  [letter: string]: number
}

const mapLetterToPresence: letterToPresence = {};

mapLetterToPresence['Q'] = 0;
mapLetterToPresence['W'] = 0;
mapLetterToPresence['E'] = 0;
mapLetterToPresence['R'] = 0;
mapLetterToPresence['T'] = 0;
mapLetterToPresence['Y'] = 0;
mapLetterToPresence['U'] = 0;
mapLetterToPresence['I'] = 0;
mapLetterToPresence['O'] = 0;
mapLetterToPresence['P'] = 0;

mapLetterToPresence['A'] = 0;
mapLetterToPresence['S'] = 0;
mapLetterToPresence['D'] = 0;
mapLetterToPresence['F'] = 0;
mapLetterToPresence['G'] = 0;
mapLetterToPresence['H'] = 0;
mapLetterToPresence['J'] = 0;
mapLetterToPresence['K'] = 0;
mapLetterToPresence['L'] = 0;

mapLetterToPresence['Z'] = 0;
mapLetterToPresence['X'] = 0;
mapLetterToPresence['C'] = 0;
mapLetterToPresence['V'] = 0;
mapLetterToPresence['B'] = 0;
mapLetterToPresence['N'] = 0;
mapLetterToPresence['M'] = 0;

export default mapLetterToPresence;