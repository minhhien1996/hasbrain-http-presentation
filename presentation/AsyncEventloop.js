// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  eventloop: require("../assets/eventloop.png")
};

preloader(images);

export default class AsyncEventLoop extends React.Component {
  render() {
    return (<div>
      <Heading size={1} textColor="white" caps={false}>Eventloop</Heading>
      <Image src={images.eventloop} height="400px"/>
    </div>);
  }
}
