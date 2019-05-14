"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stack = /** @class */ (function () {
    function Stack(items) {
        this._items = [];
        this._items = items;
    }
    Object.defineProperty(Stack.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            if (items.length == 0) {
                throw new Error("invalid items length");
            }
            this._items = items;
        },
        enumerable: true,
        configurable: true
    });
    Stack.prototype.push = function (item) {
        this._items.unshift(item);
    };
    Stack.prototype.pop = function () {
        return this._items.shift();
    };
    return Stack;
}());
var s1 = new Stack([1, 2, 3]);
s1.push(10);
console.log(s1.items);
s1.items = [];
s1.pop();
console.log(s1.items);
var CappedStack = /** @class */ (function (_super) {
    __extends(CappedStack, _super);
    function CappedStack(items) {
        return _super.call(this, items) || this;
    }
    return CappedStack;
}(Stack));
