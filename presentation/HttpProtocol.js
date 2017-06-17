// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List
} from "spectacle";

export default class ProtocolDefinition extends React.Component {
  render() {
    return (
      <div>
        <Heading size={6} textColor="secondary" caps>HTTP - Main points</Heading>
        <List>
          <ListItem>TCP on default port 80</ListItem>
          <ListItem>URL and query string</ListItem>
          <ListItem>Method: GET POST PUT DELETE</ListItem>
          <ListItem>Code: 101 200 304 404 500</ListItem>
          <ListItem>Header</ListItem>
          <ListItem>Body</ListItem>
        </List>
      </div>
    );
  }
}
