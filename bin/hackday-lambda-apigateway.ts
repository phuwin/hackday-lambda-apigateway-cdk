#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HackdayLambdaApigatewayStack } from '../lib/hackday-lambda-apigateway-stack';

const app = new cdk.App();
new HackdayLambdaApigatewayStack(app, 'HackdayLambdaApigatewayStack');
