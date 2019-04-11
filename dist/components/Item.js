var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import anime from 'animejs/lib/anime.es';

var timeOut;

var Item = function () {
    function Item(icon, color, backgroundColor, method, id, tooltipText, border) {
        _classCallCheck(this, Item);

        this.$element = $(document.createElement("div"));
        this.icon = icon;
        this.$element.addClass("item");
        backgroundColor && this.$element.css("background-color", backgroundColor);
        var i = document.createElement("i");
        color && $(i).css("color", color);
        $(i).addClass(icon);
        method && this.$element.on('click', function () {

            method(id, icon);
        });

        this.$element.css('cursor', 'pointer').attr('title', tooltipText);
        !method && this.$element.css('height', '43px');
        !method && this.$element.css('width', '43px');
        !method && this.$element.css('font-size', '25px');
        this.$element.css('border-radius', '50%');
        border && this.$element.css('border', border);

        this.$element.append(i);
        this.prev = null;
        this.next = null;
        this.isMoving = false;
        var element = this;
        this.$element.on("mousemove", function () {
            clearTimeout(timeOut);
            timeOut = setTimeout(function () {
                if (element.next && element.isMoving) {
                    element.next.moveTo(element);
                }
            }, 10);
        });
    }

    _createClass(Item, [{
        key: 'moveTo',
        value: function moveTo(item) {
            anime({
                targets: this.$element[0],
                left: item.$element.css("left"),
                top: item.$element.css("top"),
                duration: 700,
                elasticity: 500
            });
            if (this.next) {
                this.next.moveTo(item);
            }
        }
    }, {
        key: 'updatePosition',
        value: function updatePosition() {
            anime({
                targets: this.$element[0],
                left: this.prev.$element.css("left"),
                top: this.prev.$element.css("top"),
                duration: 200
            });

            if (this.next) {
                this.next.updatePosition();
            }
        }
    }]);

    return Item;
}();

export default Item;