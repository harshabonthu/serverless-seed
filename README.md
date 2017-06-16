# `serverless-seed`

This project is an application skeleton for a typical serverless backend API using aws lambda and serverless framework. You can use it
to quickly bootstrap your serverless backend and dev environment.

The seed contains a sample serverless endpoint and is preconfigured to install the serverless
framework and a bunch of development, testing tools.

The seed app doesn't do much, just shows how to wire lambda function using serverless framework.


## Getting Started

To get you started you can simply clone the `serverless-seed` repository and install the dependencies:

### Prerequisites

- You need git to clone the `serverless-seed` repository.
- You must have Node.js and its package manager (npm) installed.

### Clone `serverless-seed`

Clone the `serverless-seed` repository using git:

```
git clone https://github.com/harshabonthu/serverless-seed.git
cd serverless-seed
```

If you just want to start a new project without the `serverless-seed` commit history then you can do:

```
git clone --depth=1 https://github.com/harshabonthu/serverless-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

```
npm install
```

### Run the Application

The seed is preconfigured with a simple development server  using the [serverless offline plugin](https://github.com/dherault/serverless-offline).

```
npm start
```

Now browse to the API endpoint at [`localhost:3000/hello`](http://localhost:3000/hello).

### <a name="npm-scripts"></a> Available NPM script commands
| Task                  | Description                                                                                                    |
|-----------------------|----------------------------------------------------------------------------------------------------------------|
| `start`               | Serve development build on port 3000                                                                            |
| `test`                | Runs unit tests using Jest    

## Directory Structure
```
.
├── README.md
├── api
│   ├── __tests__                   --> Unit tests
│   │   └── hello.test.ts
│   ├── handler.ts                  --> Main Handler
│   ├── package.json                --> Include only production Node modules
│   ├── serverless.yml              --> Serverless framework config
│   ├── src
│   │   └── functions               --> All the source files for lambda functions
│   │       └── hello
│   │           └── hello.ts
│   └── tsconfig.json
├── package.json                    --> Include only development Node modules
└── yarn.lock                               
```

Note: We can include/exclude files in `package/include`, seperating the dev and prod node modules will result in lesser package size. See [Exclude/Include](https://serverless.com/framework/docs/providers/aws/guide/packaging#exclude--include), [Keeping Dev Dependencies Out Of Your Serverless Package](http://www.goingserverless.com/blog/keeping-dev-dependencies-out-of-your-serverless-package)