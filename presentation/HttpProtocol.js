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
        <Heading size={1} textColor="primary" fit>HTTP - some main points</Heading>
        <List>
          <ListItem>TCP on default port 80</ListItem>
          <ListItem>URL and query string</ListItem>
          <ListItem>Method: GET POST PUT DELETE ...</ListItem>
          <ListItem>Status code: 1xx 2xx 3xx 4xx 5xx</ListItem>
          <ListItem>Header</ListItem>
          <ListItem>Body</ListItem>
        </List>
      </div>
    );
  }
}
