import * as core from "@aws-cdk/core";
import * as cdk from '@aws-cdk/core';
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";
export class HackdayLambdaApigatewayStack extends cdk.Stack {
  constructor(scope: core.Construct, id: string) {
    super(scope, id);


    const handler = new lambda.Function(this, "helloworldHandler", {
      runtime: lambda.Runtime.NODEJS_10_X, // So we can use async in helloworld.js
      code: lambda.Code.fromAsset("resources"),
      handler: "main.handler",
    });

    const api = new apigateway.RestApi(this, "helloworlds-api", {
      restApiName: "helloworld Service",
      description: "This service serves helloworlds."
    });

    const gethelloworldsIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod("GET", gethelloworldsIntegration); // GET /
  }
}
