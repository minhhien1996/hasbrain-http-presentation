// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Text,
  S,
  BlockQuote,
  Quote,
  Cite
} from "spectacle";

export default class WarmUpSlide extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit bold lineHeight={1} textColor="primary">
          HTTP - Who are you?
        </Heading>
        <BlockQuote>
            <Quote textSize={50} bold={false} textFont={"Helvetica"}>Hypertext Transfer <S type={"underline"}>Protocol</S>, is the mechanism through which data is <S type={"underline"}>requested</S> and <S type={"underline"}>provided</S> on the World Wide Web</Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
      </div>
    );
  }
}
