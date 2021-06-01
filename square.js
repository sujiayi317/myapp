// In fact, exports is just a variable that gets initialized to the value of 
// module.exports before the module is evaluated. That value is a reference 
// to an object (empty object in this case). 
// This means that exports holds a reference to the same object 
// referenced by module.exports. It also means that by assigning another value 
// to exports it's no longer bound to module.exports.

// exports.area = function(width) { return width * width; };
// exports.perimeter = function(width) { return 4 * width; };

module.exports = {
    area: function(width) {
        return width * width;
    },

    perimeter: function(width) {
        return 4 * width;
    }
};