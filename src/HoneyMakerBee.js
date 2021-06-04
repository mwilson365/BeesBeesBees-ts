var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HoneyMakerBee = /** @class */ (function (_super) {
    __extends(HoneyMakerBee, _super);
    function HoneyMakerBee() {
        var _this = _super.call(this) || this;
        _this.honeyPot = 0;
        _this.age = 10;
        _this.job = "make honey";
        return _this;
    }
    HoneyMakerBee.prototype.makeHoney = function () {
        this.honeyPot += 1;
    };
    HoneyMakerBee.prototype.giveHoney = function () {
        this.honeyPot -= 1;
    };
    return HoneyMakerBee;
}(Bee));
;
