import * as cdk from '@aws-cdk/core';
import { EncryptedBucket } from './EncryptedBucket.js';
import * as ssm from '@aws-cdk/aws-ssm';

export class GenericOpsCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const myBucket = new EncryptedBucket(this, 'OpsBucket', {
    });

    new ssm.StringParameter(this, 'Parameter', {
      description: 'Bucket Name',
      parameterName: '/buckets/ops-generic',
      stringValue: myBucket.bucket.bucketName
    });

  }
}
