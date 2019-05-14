"use strict";
function calculatePrice(originalPrice, tax) {
    return originalPrice + (tax == undefined ? 0 : tax);
}
calculatePrice(10);
function map(arr, callback) {
    var r = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var a = arr_1[_i];
        var t = callback(a);
        r.push(t);
    }
    return r;
}
var double = function (x) { return x * 2; };
var mappedArr = map([1, 2, 3], double);
console.log(mappedArr);
//constructor functions
function Point(x, y) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.plot = function () {
        return "(" + _this.x + "," + _this.y + ")";
    };
}
var p1 = new Point(100, 200);
p1.plot();
var ref = p1.plot;
ref();
