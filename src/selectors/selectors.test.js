import expect from 'expect';
import authorsFormattedForDropdown from './selectors';

describe('Author selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for a dropdown', () => {
      const authors = [
        { id: 'Yogesh', firstName: 'Yogesh', lastName: 'Bitake' },
        { id: 'A', firstName: 'Q', lastName: 'R' }
      ];
      const expected = [
        { value: 'Yogesh', text: 'Yogesh Bitake' },
        { value: 'A', text: 'Q R' }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});