// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Text,
  S
} from "spectacle";

export default class BrowsersAndHttp extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit textColor="tertiary">Browsers & HTTP</Heading>
        <Text textColor="quartenary" margin={10}>
          URL Encode
        </Text>
        <Text textColor="primary" textSize={30}>
          GET /example/message.html<S type="bold" textColor="red">?</S><S type="bold" textColor="tertiary">name=Jean</S><S type="bold" textColor="red">&</S><S type="bold" textColor="tertiary">message=Yes<S type="bold" textColor="green">%3F</S></S>
        </Text>
      </div>
    );
  }
}
