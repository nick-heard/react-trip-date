/**
 * Author: https://gist.github.com/mir4ef/c172583bdb968951d9e57fb50d44c3f7
 */
interface IObject {
  [key: string]: any;
}
interface IDeepMerge {
  (target: IObject, ...sources: Array<IObject>): IObject;
}
/**
 * @description Method to perform a deep merge of objects
 * @param {Object} target - The targeted object that needs to be merged with the supplied @sources
 * @param {Array<Object>} sources - The source(s) that will be used to update the @target object
 * @return {Object} The final merged object
 */
export declare const deepMerge: IDeepMerge;
export {};
