// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  CodePane
} from "spectacle";

const callback = `getData(function(a){
    getData(a, function(b){
        getData(b, function(c){
            getData(c, function(d){
                getData(d, function(e){
                    ...
                });
            });
        });
    });
});`;
const promise = `const getDataPromise = (arg) => new Promise((resolve, reject) => {
  getData(arg, function(err, result) {
    if (err) reject(err);
    resolve(result);
  })
});
getDataPromise(arg)
.then(getDataPromise)
.then(getDataPromise)
.then(getDataPromise)
.catch(err => handleError(err));`;

export default class CallbackPromise extends React.Component {
  render() {
    return (<div>
      <Heading size={1} fit textColor="primary" caps={false}>Callback vs Promise</Heading>
      <CodePane source={callback} lang={"javascript"} margin={10}/>
      <CodePane source={promise} lang={"javascript"} margin={10}/>
    </div>);
  }
}
