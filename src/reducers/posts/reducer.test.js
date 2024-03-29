import { types } from '../../actions/types';
import postsReducer from './reducer';

describe('Posts reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('should return new state if receiving type', () => {
    const posts = [{title: 'Test One'}, {title: 'Test Two'}, {title: 'Test Three'}];
    const newState = postsReducer(undefined, {type: types.GET_POSTS, payload: posts});
    expect(newState).toEqual(posts);
  });
});