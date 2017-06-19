// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Image,
  List,
  ListItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  loading: require("../assets/loading.png")
};

preloader(images);

export default class Async extends React.Component {
  render() {
    return (<div>
      <Heading size={1} textColor="secondary" fit margin={20}>Asynchronous Requests</Heading>
      <div className="row">
        <div className="col-xs-6">
          <Image src={images.loading} height="300px" margin={20}/>
        </div>
        <div className="col-xs-6">
          <List align="center center" >
            <ListItem>bad connection</ListItem>
            <ListItem>slow server</ListItem>
            <ListItem>big file</ListItem>
            <ListItem>slow browser</ListItem>
          </List>
        </div>
      </div>
    </div>);
  }
}
