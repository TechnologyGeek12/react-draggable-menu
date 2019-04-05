# react-draggable-menu
Draggable menu with dynamic options to customise it as per user requirements.

<img src="https://img.shields.io/badge/Licence-MIT-blue.svg" alt="Licence" data-canonical-src="https://img.shields.io/badge/Licence-MIT-blue.svg" style="max-width:100%;"/>
<img src="https://img.shields.io/badge/Version-0.0.1-brightgreen.svg" alt="npm Version" data-canonical-src="https://img.shields.io/badge/Version-0.0.1-brightgreen.svg" style="max-width:100%;"/>

A Node.js React package that gives draggable menu with dynamic options to make it custom as per user requirment. Also give a better user experience with better and flexible options.

# Demo and Docs

* Inspired by [codepen link](https://codepen.io/andyNroses/pen/AXwPkb)

* Click [here](https://technologygeek12.github.io/react-draggable-menu/) for [Live Demo](https://technologygeek12.github.io/react-draggable-menu/)

## Installation
The package can be installed via NPM:

```javascript
npm install react-draggable-menu --save

yarn add react-draggable-menu
```
react-draggable-menu can be imported as follows

```javascript
var DraggableMenu = require('react-draggable-menu');

OR

import DraggableMenu from 'react-draggable-menu';

```


# Prerequisite
You need to include fontowesome script link in your index.html.

`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">`

Visit Font awesome icon list to choose your [icon list](https://fontawesome.com/icons?d=gallery).



# Examples

## Basic Example with all default props

```jsx
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu />
    );
  }
}

export default App;

```

## Example to pass the custom icon and data to menu

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
          menuIcon= {["fas fa-bars", '#fff', "#2196f3",0,'Main Menu']}
          menuList= {[
                       ["fab fa-affiliatetheme", '#fff', "#FBBD3B", 2,'item 1'], 
                       ["fas fa-ad", '#fff', "#4185F4", 3,'item 2'], 
                       ["fas fa-adjust", '#fff', "#48A853", 4,'item 3']
        ]}
        //icon name, color, background-color, id, tooltip-text
      />
    );
  }
}

export default App;
```

## Example to show handleChange and isOpen method of menu

```jsx
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  handleChange=(data)=>{
    //do something here with data
  }
  isOpen=(value)=>{
    //do something here with value
  }
  render() {
    return (
      <DraggableMenu
          handleChange={this.handleChange}
          isOpen={this.isOpen}/>
    );
  }
}

export default App;

```

## Example to open menu item horizontly (by default it show items vertically)

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      isVerticalOpen= {false}
      />
    );
  }
}

export default App;
```

## Example to show menu item open by default initially

```jsx
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      isMenuOpen= {true}
      />
    );
  }
}

export default App;

```

## Example to set initial position of menu icon on screen

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      initialPosition= { margin: 'auto', top: 0, right: 0, bottom: 0, left: 0 }
      //its default position, you camn change using css in this object
      />
    );
  }
}

export default App;
```

## Example to show drag menu to only right side

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      dragToRightOnly= {true}
      />
    );
  }
}

export default App;
```

## Example to show drag menu to only left side

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      dragToLeftOnly= {true}
      />
    );
  }
}

export default App;
```

## Example to show drag menu to only top side

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      dragToTopOnly= {true}
      />
    );
  }
}

export default App;
```

## Example to show drag menu to only bottom side

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      dragToBottomOnly= {true}
      />
    );
  }
}

export default App;
```

## Example to disable draggable menu

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      isDraggable= {false}
      />
    );
  }
}

export default App;
```

## Example to stop closing menu items on ESC press from keyboard

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      closeOnEsc= {false}
      />
    );
  }
}

export default App;
```

## Example to stop closing menu items on click outside menu

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      closeOnClick= {false}
      />
    );
  }
}

export default App;
```

## Example to stop closing menu items on selection(click) of item from menu list

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      closeOnSelection= {false}
      />
    );
  }
}

export default App;
```

## Example to show menu item list open for some time when page load and then close automatically

```javascript
import React, { Component } from 'react';
import DraggableMenu from 'react-draggable-menu';

class App extends Component {

  render() {
    return (
      <DraggableMenu
      showMenuOpenForTime= {1000}
      //pass the values in miliseconds
      />
    );
  }
}

export default App;
```


# Default parameter options value
```javascript
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
    menuIcon: ["fas fa-bars", '#fff', "#2196f3",0,'Main Menu'],
    menuList: [["fab fa-affiliatetheme", '#fff', "#FBBD3B", 2,'item 1'], ["fas fa-ad", '#fff', "#4185F4", 3,'item 2'], ["fas fa-adjust", '#fff', "#48A853", 4,'item 3'], ["fab fa-adn", '#fff', "#EA4335", 5,'item 4']]
```

# Available options list
```javascript
    isVerticalOpen: Boolean,
    dragToRightOnly: Boolean,
    dragToLeftOnly: Boolean,
    dragToTopOnly: Boolean,
    dragToBottomOnly: Boolean,
    isDraggable: Boolean,
    isMenuOpen: Boolean,
    initialPosition: Object,
    closeOnEsc: Boolean,
    closeOnClick: Boolean,
    closeOnSelection: Boolean,
    showMenuOpenForTime: Number,
    menuIcon: Array,
    menuList: Arrays
    isOpen: Function,
    handleChange: Function     
```