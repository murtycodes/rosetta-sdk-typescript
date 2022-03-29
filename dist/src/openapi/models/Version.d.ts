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
/**
 * The Version object is utilized to inform the client of the versions of different components of the Rosetta implementation.
 * @export
 * @interface Version
 */
export interface Version {
    /**
     * The rosetta_version is the version of the Rosetta interface the implementation adheres to. This can be useful for clients looking to reliably parse responses.
     * @type {string}
     * @memberof Version
     */
    rosetta_version: string;
    /**
     * The node_version is the canonical version of the node runtime. This can help clients manage deployments.
     * @type {string}
     * @memberof Version
     */
    node_version: string;
    /**
     * When a middleware server is used to adhere to the Rosetta interface, it should return its version here. This can help clients manage deployments.
     * @type {string}
     * @memberof Version
     */
    middleware_version?: string;
    /**
     * Any other information that may be useful about versioning of dependent services should be returned here.
     * @type {object}
     * @memberof Version
     */
    metadata?: object;
}
export declare function VersionFromJSON(json: any): Version;
export declare function VersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Version;
export declare function VersionToJSON(value?: Version | null): any;
//# sourceMappingURL=Version.d.ts.map