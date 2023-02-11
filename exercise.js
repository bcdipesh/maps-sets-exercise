// Exercise Solution

// What does the following code return?
// new Set([1,1,2,2,3,4])
// => {1,2,3,4}

// What does the following code return?
// [...new Set("referee").join("")]
// => "ref"

// What does the Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// => {
//     0: {
//         key: [1,2,3],
//         value: true
//     },
//     1: {
//         key: [1,2,3],
//         value: false
//     },
// }

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains duplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// Write a function called vowelCount which accepts a string and returns a map where the keys are
// numbers and the values are the count of the vowels in the string.
const vowelCount = (str) => {
	const vowels = new Map();
	const isVowel = (word) => 'aeiou'.includes(word.toLowerCase());

	// convert string to array using spread and array brackets and loop
	// through each character and add on to map
	[...str].forEach((word) => {
		if (isVowel(word)) {
			if (vowels.has(word)) {
				vowels.set(word, vowels.get(word) + 1);
			} else {
				vowels.set(word, 1);
			}
		}
	});

	return vowels;
};
