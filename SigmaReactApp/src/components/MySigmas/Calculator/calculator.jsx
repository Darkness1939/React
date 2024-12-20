var arr = [1, 2, 3, 4, 5]

var Sigres = arr.reduce(function(sum, current) {
    return sum + current;
}, 0);

export default Sigres;