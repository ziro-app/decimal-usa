const decimalUsa = number => {
	if (!number) return NaN
	if (Number(number)) return Number(number)
	if (isNaN(Number(typeof number === 'string' && number.replace(',', '.')))) return NaN
	return Number(typeof number === 'string' && number.replace(',', '.'))
}

module.exports = decimalUsa