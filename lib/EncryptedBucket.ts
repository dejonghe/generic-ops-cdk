import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export interface EncryptedBucketProps {
}

export class EncryptedBucket extends cdk.Construct {
  bucket: s3.IBucket;

  constructor(scope: cdk.Construct, id: string, props: EncryptedBucketProps = {}) {
    super(scope, id);
    this.bucket = new s3.Bucket(this, 'bucket', {
      encryption: s3.BucketEncryption.S3_MANAGED, 
      versioned: true
    });
  }
}
