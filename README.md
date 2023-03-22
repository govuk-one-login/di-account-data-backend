# di-account-data-backend

Backend functions & data required by services accross Auth and Account.

This is a serverless application for AWS. It's built and deployed using the [SAM CLI](https://aws.amazon.com/serverless/sam/).

## Prerequisites

We recommend using [`nvm`](https://github.com/nvm-sh/nvm) to install and manage Node.js versions. Run

```
nvm install
```

from the root of the repository or in any `lambda/` folder to install the correct version on Node.

We transpile and package the Lambda functions using `sam build`. This needs `esbuild` installed globally:

```
npm install -g esbuild
```


## Deploying the application

The applicaiton is deployed via github workflows. 

Merge to main will trigger CD deployment to the build account. 