/* tslint:disable */
/* eslint-disable */
/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    AccountBalanceRequest,
    AccountBalanceRequestFromJSON,
    AccountBalanceRequestToJSON,
    AccountBalanceResponse,
    AccountBalanceResponseFromJSON,
    AccountBalanceResponseToJSON,
    AccountCoinsRequest,
    AccountCoinsRequestFromJSON,
    AccountCoinsRequestToJSON,
    AccountCoinsResponse,
    AccountCoinsResponseFromJSON,
    AccountCoinsResponseToJSON,
} from '../models';
import * as runtime from '../runtime';

export interface AccountBalanceOperationRequest {
    accountBalanceRequest: AccountBalanceRequest;
}

export interface AccountCoinsOperationRequest {
    accountCoinsRequest: AccountCoinsRequest;
}

/**
 * AccountApi - controller interface for the server side implementation.
 *
 * @export
 * @interface AccountApiController
 */
export class AccountApiController<Req extends { body: any } = { body: any }> {
    /**
     *
     * @param service - The service that implements
     */
    constructor(private readonly service: AccountApiService) {}

    /**
     * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
     * Get an Account\'s Balance
     *
     *  @param req - The request object, where the body is a AccountBalanceRequest
     */
    accountBalance(req: Req): Promise<any> {
        return this.service.accountBalance(AccountBalanceRequestFromJSON(req.body)).then(AccountBalanceResponseToJSON);
    }

    /**
     * Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier\'s unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.
     * Get an Account\'s Unspent Coins
     *
     *  @param req - The request object, where the body is a AccountCoinsRequest
     */
    accountCoins(req: Req): Promise<any> {
        return this.service.accountCoins(AccountCoinsRequestFromJSON(req.body)).then(AccountCoinsResponseToJSON);
    }
}

/**
 * AccountApi - service interface for the server side implementation.
 *
 *
 * @export
 * @interface AccountApiService
 */
export interface AccountApiService {
    /**
     * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
     * Get an Account\'s Balance
     *
     * requestParameters - the body of the RPC style request.
     */
    accountBalance(requestParameters: AccountBalanceRequest): Promise<AccountBalanceResponse>;

    /**
     * Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier\'s unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.
     * Get an Account\'s Unspent Coins
     *
     * requestParameters - the body of the RPC style request.
     */
    accountCoins(requestParameters: AccountCoinsRequest): Promise<AccountCoinsResponse>;
}

/**
 * AccountApi - interface
 *
 * @export
 * @interface AccountApiInterface
 */
export interface AccountApiInterface {
    /**
     * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
     * @summary Get an Account\'s Balance
     * @param {AccountBalanceRequest} accountBalanceRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountBalanceRaw(
        requestParameters: AccountBalanceOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<AccountBalanceResponse>>;

    /**
     * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
     * Get an Account\'s Balance
     */
    accountBalance(requestParameters: AccountBalanceOperationRequest, initOverrides?: RequestInit): Promise<AccountBalanceResponse>;

    /**
     * Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier\'s unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.
     * @summary Get an Account\'s Unspent Coins
     * @param {AccountCoinsRequest} accountCoinsRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountCoinsRaw(
        requestParameters: AccountCoinsOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<AccountCoinsResponse>>;

    /**
     * Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier\'s unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.
     * Get an Account\'s Unspent Coins
     */
    accountCoins(requestParameters: AccountCoinsOperationRequest, initOverrides?: RequestInit): Promise<AccountCoinsResponse>;
}

/**
 *
 */
export class AccountApi extends runtime.BaseAPI implements AccountApiInterface {
    /**
     * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
     * Get an Account\'s Balance
     */
    async accountBalanceRaw(
        requestParameters: AccountBalanceOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<AccountBalanceResponse>> {
        if (requestParameters.accountBalanceRequest === null || requestParameters.accountBalanceRequest === undefined) {
            throw new runtime.RequiredError(
                'accountBalanceRequest',
                'Required parameter requestParameters.accountBalanceRequest was null or undefined when calling accountBalance.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/account/balance`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: AccountBalanceRequestToJSON(requestParameters.accountBalanceRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountBalanceResponseFromJSON(jsonValue));
    }

    /**
     * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
     * Get an Account\'s Balance
     */
    async accountBalance(requestParameters: AccountBalanceOperationRequest, initOverrides?: RequestInit): Promise<AccountBalanceResponse> {
        const response = await this.accountBalanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier\'s unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.
     * Get an Account\'s Unspent Coins
     */
    async accountCoinsRaw(
        requestParameters: AccountCoinsOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<AccountCoinsResponse>> {
        if (requestParameters.accountCoinsRequest === null || requestParameters.accountCoinsRequest === undefined) {
            throw new runtime.RequiredError(
                'accountCoinsRequest',
                'Required parameter requestParameters.accountCoinsRequest was null or undefined when calling accountCoins.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/account/coins`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: AccountCoinsRequestToJSON(requestParameters.accountCoinsRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountCoinsResponseFromJSON(jsonValue));
    }

    /**
     * Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier\'s unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.
     * Get an Account\'s Unspent Coins
     */
    async accountCoins(requestParameters: AccountCoinsOperationRequest, initOverrides?: RequestInit): Promise<AccountCoinsResponse> {
        const response = await this.accountCoinsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
