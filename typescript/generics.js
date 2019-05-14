"use strict";
var TypedQueue = /** @class */ (function () {
    function TypedQueue() {
        this.items = [];
    }
    TypedQueue.prototype.add = function (item) {
        this.items.push(item);
    };
    return TypedQueue;
}());
var numberQ = new TypedQueue();
var stringQ = new TypedQueue();
