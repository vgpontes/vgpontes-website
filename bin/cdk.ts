import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SinglePageApplication } from 'aws-cdk-spa';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'VictorPontesWebsite');

new SinglePageApplication(stack, 'VictorPontesSPA', {
  applicationName: 'vgpontes-website',
  websiteDirectory: 'out',
  domainName: 'victorpontes.dev',
  alternativeDomainNames: ['www.victorpontes.dev']
})