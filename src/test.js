import React, { useContext } from "react";

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext("light");

export default class ContextTest extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
  const value = useContext(ThemeContext);
  console.log(value);

  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    console.log("this.context", this.context);
    return <Button theme={this.context} />;
    // return <div>123</div>
  }
}

class Button extends React.Component {
  render() {
    const { theme } = this.props;
    console.log("theme", theme);
    // return <Button theme={this.context} />;
    return <div>123</div>;
  }
}
