export class AwsConfig {
  public static readonly Region = process.env.AWS_DEFAULT_REGION || "eu-west-1";
  public static readonly DynamoDbEndpoint = process.env.DynamoDbEndpoint;
}