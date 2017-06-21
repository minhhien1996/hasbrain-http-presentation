// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
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
          <Quote textSize={50} bold={false} padding={10} style={ { "line-height": 70 } }>HyperText Transfer <S type={"underline"}>Protocol</S> is the mechanism through which data is <S type={"bold"}>requested</S> and <S type={"bold"}>provided</S> on the World Wide Web</Quote>
          <Cite>Marijn Haverbeke, 2014, <S type="bold">Eloquent Javascript</S></Cite>
        </BlockQuote>
      </div>
    );
  }
}
