# Xooa Javascript SDK

XooaBlockchainApis - JavaScript client for xooa_blockchain_apis
List of Xooa Blockchain API's 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://xooa.com/support](http://xooa.com/support)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install xooa_blockchain_apis --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your xooa_blockchain_apis from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('xooa_blockchain_apis')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/xooa_blockchain_apis
then install it via:

```shell
    npm install YOUR_USERNAME/xooa_blockchain_apis --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var api = new XooaBlockchainApis.BlockchainApi()

var blockNumber = "blockNumber_example"; // {String} Block number to fetch data

var opts = { 
  'async': "async_example", // {String} Call this request asynchronously without waiting for response
  'timeout': "timeout_example" // {String} Request timeout in millisecond
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.blockData(blockNumber, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*XooaBlockchainApis.BlockchainApi* | [**blockData**](docs/BlockchainApi.md#blockData) | **GET** /block/{BlockNumber} | Get block data (block #)
*XooaBlockchainApis.BlockchainApi* | [**blockHeight**](docs/BlockchainApi.md#blockHeight) | **GET** /block/current | Get current blocks
*XooaBlockchainApis.IdentitiesApi* | [**authenticatedIdentityInformation**](docs/IdentitiesApi.md#authenticatedIdentityInformation) | **GET** /identities/me/ | Authenticated Identity Information
*XooaBlockchainApis.IdentitiesApi* | [**deleteIdentity**](docs/IdentitiesApi.md#deleteIdentity) | **DELETE** /identities/{Id} | Delete Identity
*XooaBlockchainApis.IdentitiesApi* | [**enrollment**](docs/IdentitiesApi.md#enrollment) | **POST** /identities/ | Enroll Identity
*XooaBlockchainApis.IdentitiesApi* | [**identitiesGetAllIdentities**](docs/IdentitiesApi.md#identitiesGetAllIdentities) | **GET** /identities/ | Get All Identities
*XooaBlockchainApis.IdentitiesApi* | [**identityInformation**](docs/IdentitiesApi.md#identityInformation) | **GET** /identities/{Id} | Identity Information
*XooaBlockchainApis.IdentitiesApi* | [**regenerateToken**](docs/IdentitiesApi.md#regenerateToken) | **POST** /identities/{Id}/regeneratetoken | Regenerate Identity API Token
*XooaBlockchainApis.InvokeApi* | [**invoke**](docs/InvokeApi.md#invoke) | **POST** /invoke/{fcn} | Submit blockchain transaction
*XooaBlockchainApis.QueryApi* | [**query**](docs/QueryApi.md#query) | **GET** /query/{fcn} | Query Blockchain data
*XooaBlockchainApis.ResultApi* | [**result**](docs/ResultApi.md#result) | **GET** /results/{ResultId} | Fetch result of previously submitted transaction


## Documentation for Models



## Documentation for Authorization

 All endpoints do not require authorization.

