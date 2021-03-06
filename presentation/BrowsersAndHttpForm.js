// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Text,
  CodePane
} from "spectacle";

const demoForm = `<form method="GET" action="example/message.html">
  <p>Name: <input type="text" name="name"></p>
  <p>Message:<br><textarea name="message"></textarea></p>
  <p><button type="submit">Send</button></p>
</form>`;

export default class BrowsersAndHttp extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit textColor="primary">Browsers & HTTP</Heading>
        <Text textColor="primary">
          Form
        </Text>
        <CodePane source={demoForm} textSize={24} fit/>
      </div>
    );
  }
}
