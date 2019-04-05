var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import anime from 'animejs/lib/anime.es';

var Menu = function () {
    function Menu(menu, isVarticalMenu, isCustomCss, dragToLeftOnly, dragToRightOnly, dragToTopOnly, dragToBottomOnly, isDraggable, isOpen) {
        _classCallCheck(this, Menu);

        this.$element = $(menu);
        this.size = 0;
        this.first = null;
        this.last = null;
        this.timeOut = null;
        this.hasMoved = false;
        this.status = "closed";
        this.isVarticalMenu = isVarticalMenu;
        this.isCustomCss = isCustomCss;
        this.dragToLeftOnly = dragToLeftOnly;
        this.dragToRightOnly = dragToRightOnly;
        this.dragToTopOnly = dragToTopOnly;
        this.dragToBottomOnly = dragToBottomOnly;
        this.isDraggable = isDraggable;
        this.isOpen = isOpen;
    }

    _createClass(Menu, [{
        key: 'add',
        value: function add(item) {
            var menu = this;
            if (this.first == null) {
                this.first = item;
                this.last = item;
                this.first.$element.on("mouseup", function () {
                    if (menu.first.isMoving) {
                        menu.first.isMoving = false;
                    } else {
                        menu.click();
                    }
                });
                var myStart;
                item.$element.draggable({
                    start: function start(e, ui) {
                        menu.close();
                        item.isMoving = true;
                        myStart = { top: 0, left: 0 };
                        // console.log('inside start', ui);
                    }
                }, {
                    drag: function drag(e, ui) {

                        if (item.next && menu.isDraggable) {
                            item.next.updatePosition();
                        }

                        if (!menu.isDraggable) {
                            //to allow drag only to right side
                            if (ui.position.left < myStart.left) {
                                ui.position.left = myStart.left;
                            }
                            //to allow drag only to left side
                            if (ui.position.left > myStart.left) {
                                ui.position.left = myStart.left;
                            }
                            //to allow drag only to top
                            if (ui.position.top > myStart.top) {
                                ui.position.top = myStart.top;
                            }
                            //to allow drag only to bottom from origin
                            if (ui.position.top < myStart.top) {
                                ui.position.top = myStart.top;
                            }
                        } else {
                            //to allow drag only to right side
                            if (menu.dragToRightOnly && ui.position.left < myStart.left) {
                                ui.position.left = myStart.left;
                            }
                            //to allow drag only to left side
                            if (menu.dragToLeftOnly && ui.position.left > myStart.left) {
                                ui.position.left = myStart.left;
                            }
                            //to allow drag only to top
                            if (menu.dragToTopOnly && ui.position.top > myStart.top) {
                                ui.position.top = myStart.top;
                            }
                            //to allow drag only to bottom from origin
                            if (menu.dragToBottomOnly && ui.position.top < myStart.top) {
                                ui.position.top = myStart.top;
                            }
                        }
                    }
                }, {
                    stop: function stop() {
                        item.isMoving = false;
                        item.next.moveTo(item);
                    }
                });
            } else {
                this.last.next = item;
                item.prev = this.last;
                this.last = item;
            }
            this.$element.after(item.$element);
        }
    }, {
        key: 'open',
        value: function open() {
            this.status = "open";
            this.isOpen('Open');
            var current = this.first.next;
            var iterator = 1;
            var head = this.first;
            var sens;
            if (!this.isVarticalMenu) {
                if (this.isCustomCss) {

                    var width = window.screen.availWidth;
                    sens = parseInt(head.$element.css("left"), 10) < width / 2 ? 1 : -1;
                } else {
                    sens = head.$element.css("left") < head.$element.css("right") ? 1 : -1;
                }
                while (current != null) {
                    anime({
                        targets: current.$element[0],
                        left: parseInt(head.$element.css("left"), 10) + sens * (iterator * 50),
                        top: head.$element.css("top"),
                        duration: 500
                    });
                    iterator++;
                    current = current.next;
                }
            } else {
                if (this.isCustomCss) {

                    var height = window.screen.availHeight;
                    sens = parseInt(head.$element.css("top"), 10) < height / 2 ? 1 : -1;
                } else {
                    sens = head.$element.css("bottom") < head.$element.css("top") ? -1 : 1;
                }
                while (current != null) {
                    anime({
                        targets: current.$element[0],
                        duration: 500,
                        delay: 0,
                        easeing: 'easeInOutExpo',
                        translateY: {
                            value: 10 + sens * (iterator * 50)
                        }
                    });
                    iterator++;
                    current = current.next;
                }
            }
        }
    }, {
        key: 'close',
        value: function close() {
            this.status = "closed";
            this.isOpen('Closed');
            var current = this.first.next;
            var head = this.first;
            var iterator = 1;
            while (current != null) {
                if (!this.isVarticalMenu) {
                    anime({
                        targets: current.$element[0],
                        left: head.$element.css("left"),
                        top: head.$element.css("top"),
                        duration: 500
                    });
                } else {
                    anime({
                        targets: current.$element[0],
                        duration: 500,
                        translateY: {
                            value: 0
                        }
                    });
                }
                iterator++;
                current = current.next;
            }
        }
    }, {
        key: 'click',
        value: function click() {
            if (this.status === "closed") {
                this.open();
            } else {
                this.close();
            }
        }
    }]);

    return Menu;
}();

export default Menu;