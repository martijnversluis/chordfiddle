import expect from 'expect';

import {
  IMPORT_CHORD_SHEET,
  SET_CHORD_SHEET,
  SET_SELECTION_RANGE,
  SWITCH_TO_FLAT,
  SWITCH_TO_SHARP,
  TRANSPOSE_DOWN,
  TRANSPOSE_UP
} from '../../action_types/chord_sheet_action_types';

import {
  importChordSheet,
  setChordSheet,
  setSelectionRange, switchToFlat, switchToSharp,
  transposeDown,
  transposeUp
} from '../../actions/chord_sheet_actions';

describe('chord sheet actions', () => {
  it('generates an action to set the selected range', () => {
    const expectedAction = {
      type: SET_SELECTION_RANGE,
      start: 5,
      end: 10
    };

    expect(setSelectionRange({ start: 5, end: 10 })).toEqual(expectedAction);
  });

  it('generates an action to set the chord sheet', () => {
    const expectedAction = {
      type: SET_CHORD_SHEET,
      chordSheet: 'foo'
    };

    expect(setChordSheet('foo')).toEqual(expectedAction);
  });

  it('generates an action to import a chord sheet', () => {
    const expectedAction = {
      type: IMPORT_CHORD_SHEET,
      chordSheet: 'bar'
    };

    expect(importChordSheet('bar')).toEqual(expectedAction);
  });

  it('generates an action to transpose the song up', () => {
    const expectedAction = { type: TRANSPOSE_UP };
    expect(transposeUp()).toEqual(expectedAction);
  });

  it('generates an action to transpose the song down', () => {
    const expectedAction = { type: TRANSPOSE_DOWN };
    expect(transposeDown()).toEqual(expectedAction);
  });

  it('generates an action to switch to sharp chords', () => {
    const expectedAction = { type: SWITCH_TO_SHARP };
    expect(switchToSharp()).toEqual(expectedAction);
  });

  it('generates an action to switch to flat chords', () => {
    const expectedAction = { type: SWITCH_TO_FLAT };
    expect(switchToFlat()).toEqual(expectedAction);
  });
});