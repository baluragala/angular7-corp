"use strict";
var b = { title: "Angular 7", author: "zeo" };
b.price = 200;
var MediPlayer = /** @class */ (function () {
    function MediPlayer() {
    }
    MediPlayer.prototype.play = function () {
        return true;
    };
    MediPlayer.prototype.stop = function () {
        return true;
    };
    MediPlayer.prototype.fastForward = function (duration) {
        return true;
    };
    return MediPlayer;
}());
