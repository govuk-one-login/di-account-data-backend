# di-account-data-backend

Backend functions & data required by services accross Auth and Account.
This is a serverless application for AWS. It's built and deployed using the [SAM CLI](https://aws.amazon.com/serverless/sam/).

Purpose and function of the DI Account Data AWS accounts and repositories is described in [this ADR](https://github.com/govuk-one-login/di-account-data-backend/blob/main/docs/adr/0001-use-and-function-of-di-account-data.md).


## Deploying the application

The applicaiton is deployed via github workflows. 

Merge to main will trigger CD deployment to the build account.