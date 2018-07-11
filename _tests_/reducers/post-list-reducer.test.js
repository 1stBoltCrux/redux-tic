import squareReducer from './../../src/reducers/square-reducer';

describe('postListReducer', () => {
  let action;
  const samplePostData = {
    title: 'Test Post: Dont Upvote',
    content: 'test',
    karma: 1,
    timeOpen: 1000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(squareReducer({}, { type: null })).toEqual({});
  });

});
