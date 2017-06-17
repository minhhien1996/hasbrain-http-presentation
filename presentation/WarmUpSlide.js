// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Text,
  S
} from "spectacle";

export default class WarmUpSlide extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit bold caps lineHeight={1} textColor="secondary">
          HTTP - Who you are?
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fill padding={10}>
          Hypertext Transfer <S type={"underline"}>Protocol</S>, is the mechanism through which data is <S type={"underline"}>requested</S> and <S type={"underline"}>provided</S> on the World Wide Web
        </Text>
      </div>
    );
  }
}
