sam pipeline bootstrap --stage dev

sam pipeline bootstrap generates the required AWS infrastructure resources to connect
to your CI/CD system. This step must be run for each deployment stage in your pipeline,
prior to running the sam pipeline init command.

We will ask for [1] stage definition, [2] account details, and
[3] references to existing resources in order to bootstrap these pipeline resources.

[1] Stage definition
Stage configuration name: dev

[2] Account details
The following AWS credential sources are available to use.
To know more about configuration AWS credentials, visit the link below:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
	1 - Environment variables (not available)
	2 - default (named profile)
	q - Quit and configure AWS credentials
Select a credential source to associate with this stage: 2
Associated account 123456789012 with configuration dev.

Enter the region in which you want these resources to be created [us-west-2]:
Select a user permissions provider:
	1 - IAM (default)
	2 - OpenID Connect (OIDC)
Choice (1, 2): 2
Select an OIDC provider:
	1 - GitHub Actions
	2 - GitLab
	3 - Bitbucket
Choice (1, 2, 3): 1
Enter the URL of the OIDC provider [https://token.actions.githubusercontent.com]:
Enter the OIDC client ID (sometimes called audience) [sts.amazonaws.com]:
Enter the GitHub organization that the code repository belongs to. If there is no organization enter your username instead: sguillory6
Enter GitHub repository name: the-complete-sam-workshop-github-actions
Enter the name of the branch that deployments will occur from [main]:

[3] Reference application build resources
Enter the pipeline execution role ARN if you have previously created one, or we will create one for you []:
Enter the CloudFormation execution role ARN if you have previously created one, or we will create one for you []:
Please enter the artifact bucket ARN for your Lambda function. If you do not have a bucket, we will create one for you []:
Does your application contain any IMAGE type Lambda functions? [y/N]: N

[4] Summary
Below is the summary of the answers:
	1 - Account: 123456789012
	2 - Stage configuration name: dev
	3 - Region: us-west-2
	4 - OIDC identity provider URL: https://token.actions.githubusercontent.com
	5 - OIDC client ID: sts.amazonaws.com
	6 - GitHub organization: your-github-username
	7 - GitHub repository: sam-app
	8 - Deployment branch:  main
	9 - Pipeline execution role: [to be created]
	10 - CloudFormation execution role: [to be created]
	11 - Artifacts bucket: [to be created]
	12 - ECR image repository: [skipped]
Press enter to confirm the values above, or select an item to edit the value:

This will create the following required resources for the 'dev' configuration:
	- IAM OIDC Identity Provider
	- Pipeline execution role
	- CloudFormation execution role
	- Artifact bucket
Should we proceed with the creation? [y/N]: y
	Updating the required resources..
