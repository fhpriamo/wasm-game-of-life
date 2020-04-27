/* tslint:disable */
/* eslint-disable */
/**
*/
export enum Cell {
  Dead,
  Alive,
}
export class Universe {
  free(): void;
/**
*/
  tick(): void;
/**
* @returns {Universe} 
*/
  static new(): Universe;
/**
* @returns {string} 
*/
  render(): string;
/**
* @returns {number} 
*/
  width(): number;
/**
* @returns {number} 
*/
  height(): number;
/**
* @returns {number} 
*/
  cells(): number;
}
