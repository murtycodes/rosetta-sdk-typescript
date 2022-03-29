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
 * Operator is used by query-related endpoints to determine how to apply conditions. If this field is not populated, the default `and` value will be used.
 * @export
 * @enum {string}
 */
export declare enum Operator {
    or = "or",
    and = "and"
}
export declare function OperatorFromJSON(json: any): Operator;
export declare function OperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Operator;
export declare function OperatorToJSON(value?: Operator | null): any;
//# sourceMappingURL=Operator.d.ts.map