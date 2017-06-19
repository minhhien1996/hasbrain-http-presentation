// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  CodePane
} from "spectacle";

const callback = `getData(function(a){
    getData(a, function(err, b){
        if (err) handleError(err);
        getData(b, function(err, c){
            if (err) handleError(err);
            getData(c, function(err, d){
                if (err) handleError(err);
                getData(d, function(err, e){
                    getData(d, function(err, e){
                      if (err) handleError(err);
                      ...
                    });
                });
            });
        });
    });
});`;
const promise = `const getDataPromise = function() {
  return new Promise(function(resolve, reject) {
    getData(arg, function(err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
}
getDataPromise(arg)
.then(getDataPromise)
.then(getDataPromise)
.then(getDataPromise)
.then(getDataPromise)
.then(getDataPromise)
.catch(err => handleError(err));`;

export default class CallbackPromise extends React.Component {
  render() {
    return (<div>
      <Heading size={1} fit textColor="primary" caps={false}>Callback vs Promise</Heading>
      <div className="row">
        <div className="col-xs-6">
          <CodePane source={callback} lang={"javascript"} margin={20}/>
        </div>
        <div className="col-xs-6">
          <CodePane source={promise} lang={"javascript"} margin={20}/>
        </div>
      </div>
    </div>);
  }
}
