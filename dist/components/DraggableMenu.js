var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import Menu from './Menu';
import Item from './Item';

var that;

var DraggableMenu = function (_Component) {
    _inherits(DraggableMenu, _Component);

    function DraggableMenu(props) {
        _classCallCheck(this, DraggableMenu);

        var _this = _possibleConstructorReturn(this, (DraggableMenu.__proto__ || Object.getPrototypeOf(DraggableMenu)).call(this, props));

        _this.state = { menuData: '' };
        that = _this;
        return _this;
    }

    _createClass(DraggableMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // verticalMenu, customCss
            var verticalOpen = this.props.isVerticalOpen ? true : false;
            var isCustomCss = Object.keys(this.props.initialPosition).length ? true : false;
            var menu = new Menu("#draggableMenu", verticalOpen, isCustomCss, this.props.dragToLeftOnly, this.props.dragToRightOnly, this.props.dragToTopOnly, this.props.dragToBottomOnly, this.props.isDraggable, this.isOpen);

            if (this.props.menuIcon) {
                var item1 = new Item(this.props.menuIcon[0], this.props.menuIcon[1], this.props.menuIcon[2], null, this.props.menuIcon[3], this.props.menuIcon[4], this.props.border);
                menu.add(item1);
            }
            if (this.props.menuList) {
                this.props.menuList.map(function (data, index) {
                    index = new Item(data[0], data[1], data[2], _this2.handleChange, data[3], data[4], _this2.props.border);
                    menu.add(index);
                });
            }

            this.props.showMenuOpenForTime && $(document).delay(50).queue(function (next) {
                menu.open();
                next();
                $(document).delay(that.props.showMenuOpenForTime).queue(function (next) {
                    menu.close();
                    next();
                });
            });
            this.props.isMenuOpen && $(document).queue(function (next) {
                menu.open();
            });
            this.setState({ menuData: menu });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(id, name) {
            var data = {};
            data.id = id;
            data.name = name;
            that.props.closeOnSelection && that.state.menuData.close();
            that.props.handleChange && that.props.handleChange(data);
        }
    }, {
        key: 'isOpen',
        value: function isOpen(value) {
            that.props.isOpen && that.props.isOpen(value);
        }
    }, {
        key: 'render',
        value: function render() {
            this.props.closeOnEsc && (document.onkeydown = function (evt) {
                evt = evt || window.event;
                var isEscape = false;
                if ("key" in evt) {
                    isEscape = evt.key === "Escape" || evt.key === "Esc";
                } else {
                    isEscape = evt.keyCode === 27;
                }
                if (isEscape) {
                    that.state.menuData.close();
                }
            });
            this.props.closeOnClick && (document.onclick = function (event) {
                !event.target.className && that.state.menuData.close();
            });
            return React.createElement(
                'div',
                { className: 'center menu', style: Object.keys(this.props.initialPosition).length ? this.props.initialPosition : { margin: 'auto', top: 0, right: 0, bottom: 0, left: 0 } },
                React.createElement('div', { id: 'draggableMenu' })
            );
        }
    }]);

    return DraggableMenu;
}(Component);

DraggableMenu.defaultProps = {
    isVerticalOpen: true,
    dragToRightOnly: false,
    dragToLeftOnly: false,
    dragToTopOnly: false,
    dragToBottomOnly: false,
    isDraggable: true,
    isMenuOpen: false,
    initialPosition: {},
    closeOnEsc: true,
    closeOnClick: true,
    closeOnSelection: true,
    showMenuOpenForTime: 0,
    border: '1px solid #fff',
    menuIcon: ["fas fa-bars", '#fff', "#2196f3", 0, 'Main Menu'],
    menuList: [["fab fa-affiliatetheme", '#fff', "#FBBD3B", 2, 'item 1'], ["fas fa-ad", '#fff', "#4185F4", 3, 'item 2'], ["fas fa-adjust", '#fff', "#48A853", 4, 'item 3'], ["fab fa-adn", '#fff', "#EA4335", 5, 'item 4']]
    // ["fab fa-affiliatetheme", '#fff', "#FBBD3B", 2], ["fas fa-ad", '#fff', "#4185F4", 3], ["fas fa-adjust", '#fff', "#48A853", 4], ["fab fa-adn", '#fff', "#EA4335", 5]
};

export default DraggableMenu;