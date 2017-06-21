// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide
} from "spectacle";

import WarmUpSlide from "./WarmUpSlide";
import History from "./History";
import ProtocolDefinition from "./ProtocolDefinition";
import HttpProtocol from "./HttpProtocol";
import BrowsersAndHttpForm from "./BrowsersAndHttpForm";
import UrlEncoded from "./UrlEncoded";
import Body from "./Body";
import BrowsersAndHttpXhr from "./BrowsersAndHttpXhr";
import BrowsersAndHttpSandBox from "./BrowsersAndHttpSandBox";
import Async from "./Async";
import AsyncEventloop from "./AsyncEventloop";
import CallbackPromise from "./CallbackPromise";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={500} theme={theme} progress="number">
        <Slide transition={["spin"]} bgColor="secondary" textColor="primary">
          <WarmUpSlide/>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary" textColor="primary">
          <History/>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary" textColor="primary">
          <ProtocolDefinition/>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="secondary" textColor="primary">
          <HttpProtocol/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BrowsersAndHttpForm/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <UrlEncoded/>
        </Slide>
         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Body/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BrowsersAndHttpXhr/>
        </Slide>
        <Slide transition={["fade", "zoom"]} bgColor="primary" textColor="secondary">
          <BrowsersAndHttpSandBox/>
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="tertiary" textColor="primary">
          <Async/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
          <AsyncEventloop/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
          <CallbackPromise/>
        </Slide>
      </Deck>
    );
  }
}
