// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Text,
  CodePane
} from "spectacle";

const demoBody = `POST /example/message
Host: www.example.com
Content-Type: application/json
Content-Length: 69

{
  "name": "Jean",
  "message": "Yes?"
}
`;

export default class ProtocolDefinition extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit textColor="primary">Browsers & HTTP</Heading>
        <Text textColor="primary">
          Body
        </Text>
        <CodePane source={demoBody} textSize={24} fit/>
      </div>
    );
  }
}
