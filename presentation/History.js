// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Quote,
  Cite,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  tim: require("../assets/tim-lee.jpg")
};

preloader(images);

export default class WarmUpSlide extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-4">
          <Image src={images.tim} height="400px" margin="50px 0"/>
        </div>
        <div className="col-xs-8">
          <BlockQuote>
            <Quote textSize={40} padding={10} style={ { "line-height": 70 } } bold={false}>I basically write the code, and the specs, and the documentation for how the client and the server talk to each other</Quote>
            <Cite textColor="secondary">Tim Berners-Lee</Cite>
          </BlockQuote>
        </div>
      </div>
    );
  }
}
