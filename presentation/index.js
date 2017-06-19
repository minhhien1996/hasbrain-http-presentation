// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import WarmUpSlide from "./WarmUpSlide";
import ProtocolDefinition from "./ProtocolDefinition";
import HttpProtocol from "./HttpProtocol";
import BrowsersAndHttpForm from "./BrowsersAndHttpForm";
import BrowsersAndHttpXhr from "./BrowsersAndHttpXhr";
import BrowsersAndHttpSandBox from "./BrowsersAndHttpSandBox";
import Async from "./Async";
import AsyncEventloop from "./AsyncEventloop";
import CallbackPromise from "./CallbackPromise";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

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
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <WarmUpSlide/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary" textColor="primary">
          <ProtocolDefinition/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <HttpProtocol/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <BrowsersAndHttpForm/>
        </Slide>
        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <BrowsersAndHttpXhr/>
        </Slide>
        <Slide transition={[]} bgColor="primary" textColor="secondary">
          <BrowsersAndHttpSandBox/>
        </Slide>
        <Slide transition={[]} bgColor="tertiary" textColor="primary">
          <Async/>
        </Slide>
        <Slide transition={[]} bgColor="black">
          <AsyncEventloop/>
        </Slide>
        <Slide transition={[]} bgColor="black">
          <CallbackPromise/>
        </Slide>
      </Deck>
    );
  }
}
