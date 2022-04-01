import * as sst from "@serverless-stack/resources";

import * as events from "aws-cdk-lib/aws-events";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const default_bus = new sst.EventBus(this, "BusDefault", {
      eventBridgeEventBus: events.EventBus.fromEventBusName(
        this,
        "ImportedBus",
        "default"
      ),
      rules: {
        rule_bus_demo: {
          eventPattern: { source: [`patient`], detailType: ["updated"] },
          targets: ["src/patient-updated.handler"],
        },
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      Bus: default_bus.eventBusArn,
    });
  }
}
