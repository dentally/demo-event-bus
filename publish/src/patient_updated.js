import { EventBridge } from "aws-sdk";
export async function handler(event) {
  const aws_region = "us-east-1";

  const EventBusName = `default`;

  const eventbridge = new EventBridge({ region: aws_region });

  const params = {
    Entries: [
      {
        Detail: JSON.stringify({
          patient_id: "1234",
          patient_name: "John Doe",
        }),
        EventBusName,
        Resources: [],
        Source: "patient",
        DetailType: "updated",
        Time: new Date(),
      },
    ],
  };
  console.log(`Sending event to the ${EventBusName}`, params);

  await eventbridge.putEvents(params).promise();

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Sent to the default event bus at ${event.requestContext.time}.`,
  };
}
