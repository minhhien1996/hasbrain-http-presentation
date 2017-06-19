// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Text,
  CodePane
} from "spectacle";

const demoHttpRequest = `GET /17_http.html HTTP/1.1
Host: eloquentjavascript.net
User-Agent: Your browser 's name`;

const demoHttpResponse = `HTTP /1.1 200 OK
Content-Length: 65585
Content-Type: text/html
Last-Modified: Wed, 09 Apr 2014 10:48:09 GMT
<!doctype html>
... the rest of the document`;

export default class ProtocolDefinition extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit bold lineHeight={1} textColor="secondary" fit>
          The Protocol
        </Heading>
        <Text textColor="primary">
          is a defined set of rules and regulations that determine how data is transmitted in telecommunications and computer networking
        </Text>
        <CodePane source={demoHttpRequest} margin={10}/>
        <CodePane source={demoHttpResponse} margin={10}/>
      </div>
    );
  }
}
