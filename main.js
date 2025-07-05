function highAndLow(numbers) {
	numbers = numbers.split(' ').sort(function (a, b) {
		return a - b
	})
	return numbers[0], numbers[numbers.length - 1]
}
