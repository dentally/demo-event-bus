// const AWS = require("aws-sdk");
import  * as AWS  from "aws-sdk";
export async function handler(event) {
  const aws_region =  "us-east-1" 


  const EventBusName = `default`;

  // BUS DETAIL
  const Source = `demo`; // REQUIRED
  const DetailType = "test"; // OPTIONAL

  const eventbridge = new AWS.EventBridge({ region:aws_region});

  console.log(
    `Sending event to the ${EventBusName} event bus on AWS EventBridge in region ${aws_region}.`
  );
  const params = {
    Entries: [
      {
        Detail: JSON.stringify({
          "some_prod":"some_value",
        }),
        DetailType,
        EventBusName,
        Resources: [],
        Source,
        Time: new Date(),
      },
    ],
  };
  console.log("params",params)

     await eventbridge.putEvents(params).promise();


  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Sent to the default event bus at ${event.requestContext.time}.`,
  };
}
