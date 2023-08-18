# REACT COUNTDOWN CLOCK

@goldeneye-industrial-intelligence/react-countdown-clock is a react component which can be used in any one of the following ways:

- A Normal Clock
- Days Count from a certain date (StartDate as mentioned in docs).

Why @goldeneye-industrial-intelligence/react-countdown-clock?

1. **Single Component for every type of clock** - It provides you a generic clock component, which allows you to design it dynamically as you want. You can aply whatever style you want. You can also use it as a timer by just providing the starting date using momentJS.

## Getting Started

### Installation

```sh
npm install --save @goldeneye-industrial-intelligence/react-countdown-clock
```

### Exports

Here's how to use it:

```js
// ES6
import ReactCountdownClock from "@goldeneye-industrial-intelligence/react-countdown-clock"; // React Awesome Clock

// CommonJS
let ReactCountdownClock = require("@goldeneye-industrial-intelligence/react-countdown-clock");
```

## `<ReactCountdownClock>`

A `<ReactCountdownClock>` element renders the clock. You can also add an additional days count to this component by just passing the startDate as props.

### ReactCountdownClock Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import ReactCountdownClock from "@goldeneye-industrial-intelligence/react-countdown-clock";

class App extends React.Component {
  render() {
    return (
      <div>
        // Simple Clock Component
        <ReactCountdownClock style={{ color: "lightGrey", fontSize: 70 }} />
        <ReactCountdownClock
          day={true}
          style={{
            color: "grey",
            fontSize: 60,
            textShadow: "0 0 10px grey",
            fontFamily: "aerial"
          }}
        />
        // Clock Component With Days Count
        <ReactCountdownClock
          day={true}
          style={{ color: "lightGrey", fontSize: 70 }}
          startDate="2018-09-06"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
```

#### `<ReactCountdownClock>` Props:

| Prop name      | Type      | Description                                                                                   | Example values                   |
| -------------- | --------- | --------------------------------------------------------------------------------------------- | -------------------------------- |
| day            | `boolean` | Displays the day section.                                                                     | `day={true}`                     |
| endDate      | `string`  | Displays the date count from endDate.                                                       | `endDate="2017-06-01"`         |
| clockSeparator | `string`  | Sets the separator between days, hours and minutes. We are using `.` as the default separator | `clockSeparator="."`             |
| style          | `object`  | Sets the styles of the app, you can pass in any valid styles here.                            | `style={{ color: "lightGrey" }}` |

## Contributing

- Fork the project
- Install the dependencies: `$ npm install`
- Run the project: `$ npm start`
- Make changes.
- Add appropriate tests
- `$ npm test`
- If tests don't pass, make them pass.
- Update README with appropriate docs.
- Commit and make Pull Request.

## License

This source code is licensed under the MIT license.