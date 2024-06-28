import PropTypes from 'prop-types';
function formatNumber(number) {
    let result;
    if (number >= 1000000) {
        const division = number / 1000000;
        if (Number.isInteger(division)) {
            result = division.toFixed(0) + 'M';
        } else {
            result = division.toFixed(1) + 'M';
        }
    } else if (number >= 10000) {
        const division = number / 1000;
        if (Number.isInteger(division)) {
            result = division.toFixed(0) + 'K';
        } else {
            result = division.toFixed(1) + 'K';
        }
    } else {
        result = number;
    }
    return result;
}

formatNumber.propTypes = {
    number: PropTypes.number.isRequired,
};

export default formatNumber;
