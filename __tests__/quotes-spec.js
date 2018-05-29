describe(`searching for quoted strings, using character class [^"]`, () => {
	const x = `one "two three four" five six "seven eight" nine
"beep boop" whatever "tacos" eleven "eighty"
empty ""`;
	it(`should match a literal double quote, followed by any characters, excluding another literal double quote, zero or more times, followed by a literal double quote`, () => {
		const actual = x.match(/"[^"]*"/g);
		expect(actual).toEqual(
			[
				'\"two three four\"',
				'\"seven eight\"',
				'\"beep boop\"',
				'\"tacos\"',
				'\"eighty\"',
				'\"\"'
			]
		);
		expect(actual.length).toBe(6);
	});
});
