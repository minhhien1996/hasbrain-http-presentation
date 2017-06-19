// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  crossOrigin: require("../assets/cross-origin.png")
};

preloader(images);

export default class BrowsersAndHttp extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit textColor="secondary">Browsers and HTTP</Heading>
        <Text margin={10} textColor="secondary">
          Sandbox - Cross Origin Resource Sharing
        </Text>
        <Image src={images.crossOrigin} height="400px"/>
      </div>
    );
  }
}
