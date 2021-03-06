/**
 * Javascript SDK for Xooa
 *
 * Copyright 2018 Xooa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License
 * for the specific language governing permissions and limitations under the License.
 *
 * Author: Arisht Jain
 */

(function (root, factory) {
	if (typeof module === 'object' && module.exports)
	// CommonJS-like environments that support module.exports, like Node.
		module.exports = factory(require('../ApiClient'))
	else {
		// Browser globals (root is window)
		if (!root.XooaJavascriptSdk)
			root.XooaJavascriptSdk = {}

		root.XooaJavascriptSdk.IdentitiesApi = factory(root.XooaJavascriptSdk.ApiClient)
	}
}(this, ApiClient => {
	'use strict'

	/**
     * Identities service.
     * @module api/IdentitiesApi
     * @version v1
     */

	/**
     * Constructs a new IdentitiesApi.
     * @alias module:api/IdentitiesApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
	const exports = function (apiClient) {
		this.apiClient = apiClient || ApiClient.instance


		/**
         * Callback function to receive the result of the authenticatedIdentityInformation operation.
         * @callback module:api/IdentitiesApi~authenticatedIdentityInformationCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

		/**
         * Authenticated Identity Information
         * This End Point Returns Information about the Authenticated Identity
         * @param {module:api/IdentitiesApi~authenticatedIdentityInformationCallback} callback The callback function, accepting three arguments: error, data, response
		 * @returns {}
         */
		this.currentIdentity = async function (callback) {
			const postBody = null


			const pathParams = {}
			const queryParams = {}
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}


			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/identities/me/', 'GET',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}

		/**
         * Callback function to receive the result of the deleteIdentity operation.
         * @callback module:api/IdentitiesApi~deleteIdentityCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

		/**
         * Delete Identity
         * @param {String} identityId Identity Id
         * @param {Object} opts Optional parameters
         * @param {String} opts.async Call this request asynchronously without waiting for response
         * @param {String} opts.timeout Request timeout in millisecond
         * @param {module:api/IdentitiesApi~deleteIdentityCallback} callback The callback function, accepting three arguments: error, data, response
		 * @returns {}
         */
		this.deleteIdentity = async function (opts, identityId, callback) {
			this.apiClient.debug({
				fn: 'deleteIdentity',
				opts,
				identityId,
			})
			opts = opts || {}
			const postBody = null

			// verify the required parameter 'identityId' is set
			if (identityId === undefined || identityId === null)
				throw new Error("Missing the required parameter 'identityId' when calling deleteIdentity")



			const pathParams = { Id: identityId }
			const queryParams = {
				async: opts.async,
				timeout: opts.timeout,
			}
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/identities/{Id}', 'DELETE',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}

		/**
         * Callback function to receive the result of the enrollment operation.
         * @callback module:api/IdentitiesApi~enrollmentCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

		/**
         * Enroll Identity
         * The Enroll Identity end point is used to  enroll new identities for the Smart Contract app.  A success response includes the API Key generated for the identity. This API Key can be used to call API End points on behalf of the enrolled identity. This End Point provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this end point will appear, and can be managed, using Xooa console under the identities tab of the Smart Contract app Required permission: manage identities (canManageIdentities&#x3D;true)
         * @param {Object} opts Optional parameters
         * @param {String} opts.async Call this request asynchronously without waiting for response
         * @param {String} opts.timeout Request timeout
         * @param {String} identity Request payload body
         * @param {module:api/IdentitiesApi~enrollmentCallback} callback The callback function, accepting three arguments: error, data, response
		 * @returns {}
         */
		this.enrollIdentity = async function (opts, identity, callback) {
			this.apiClient.debug({
				fn: 'enrollIdentity',
				opts,
				identity,
			})

			opts = opts || {}

			// verify the required parameter 'id' is set
			if (identity === undefined || identity === null)
				throw new Error("Missing the required parameter 'identity' when calling enrollIdentity")

			const postBody = identity
			const pathParams = {}
			const queryParams = {
				async: opts.async,
				timeout: opts.timeout,
			}
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/identities/', 'POST',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}

		/**
         * Callback function to receive the result of the identitiesGetAllIdentities operation.
         * @callback module:api/IdentitiesApi~identitiesGetAllIdentitiesCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

		/**
         * Get All Identities
         * Get all identities from the identity registry
         * @param {module:api/IdentitiesApi~identitiesGetAllIdentitiesCallback} callback The callback function, accepting three arguments: error, data, response
         */
		this.getIdentities = async function (callback) {
			this.apiClient.debug({ fn: 'getIdentities' })
			const postBody = null


			const pathParams = {}
			const queryParams = {}
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/identities/', 'GET',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}

		/**
         * Callback function to receive the result of the identityInformation operation.
         * @callback module:api/IdentitiesApi~identityInformationCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

		/**
         * Identity Information
         * Get the specified identity from the identity registry
         * @param {String} identityId Identity Id
         * @param {module:api/IdentitiesApi~identityInformationCallback} callback The callback function, accepting three arguments: error, data, response
         */
		this.getIdentity = async function (identityId, callback) {
			this.apiClient.debug({
				fn: 'getIdentity',
				identityId,
			})
			const postBody = null

			// verify the required parameter 'id' is set
			if (identityId === undefined || identityId === null)
				throw new Error("Missing the required parameter 'identityId' when calling identityInformation")



			const pathParams = { Id: identityId }
			const queryParams = {}
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/identities/{Id}', 'GET',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}

		/**
         * Callback function to receive the result of the regenerateToken operation.
         * @callback module:api/IdentitiesApi~regenerateTokenCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

		/**
         * Regenerate Identity API Token
         * Regenerate Identity API Token
         * @param {String} identityId Identity Id
         * @param {Object} opts opts
         * @param {module:api/IdentitiesApi~regenerateTokenCallback} callback The callback function, accepting three arguments: error, data, response
         */
		this.regenerateIdentityApiToken = async function (opts, identityId, callback) {
			this.apiClient.debug({
				fn: 'regenerateIdentityApiToken',
				opts,
				identityId,
			})
			const postBody = null

			// verify the required parameter 'id' is set
			if (identityId === undefined || identityId === null)
				throw new Error("Missing the required parameter 'id' when calling regenerateToken")


			const queryParams = {
				async: opts.async,
				timeout: opts.timeout,
			}
			const pathParams = { Id: identityId }
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/identities/{Id}/regeneratetoken', 'POST',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}
	}

	return exports
}))
