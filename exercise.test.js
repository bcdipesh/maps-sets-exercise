describe('Maps and Sets Exercise Solution Test', () => {
	it('returns true when there are duplicate items in an array on hasDuplicate(arr)', () =>
		expect(hasDuplicate([1, 3, 2, 1])).toBe(true));

	it('returns false when there are no duplicate items in an array on hasDuplicate(arr)', () =>
		expect(hasDuplicate([1, 5, -1, 4])).toBe(false));

	it('returns a map that has vowel as a key and a count of the vowel as the value on vowelCount()', () => {
		expect(vowelCount('awesome')).toEqual(
			new Map([
				['a', 1],
				['e', 2],
				['o', 1],
			])
		);

		expect(vowelCount('Colt')).toEqual(new Map([['o', 1]]));
	});
});
