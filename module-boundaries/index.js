/* @flow */

const hackIntoMainFrameWithNumber = n => n;

export function sum(n1: number, n2: number): number {
  hackIntoMainFrameWithNumber(n1);
  return n1 + n2;
}

