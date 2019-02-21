import { GenderEnum } from './gender.enum';

describe('GenderEnum', () => {

  it('should have 3 items', () => {
    // Given
    const options = Object.keys(GenderEnum);
    // Then
    expect(options.length).toEqual(3);
    expect(options).toEqual(jasmine.arrayContaining([
      'MALE',
      'FEMALE',
      'UNKNOWN',
    ]));
  });
});
