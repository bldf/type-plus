// By Drew Colthorp, <https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/#comment-604580>
// <https://gist.github.com/dcolthorp/aa21cf87d847ae9942106435bf47565d>

/**
 * Create a "branded" version of a type.
 * TypeScript won't allow implicit conversion to this type
 */
export type Brand<T, BrandT extends string> = T & { _type: BrandT }

export function createBrandCreator<BrandT extends string, T>(): (value: T) => Brand<T, BrandT> {
  return (value: T): Brand<T, BrandT> => {
    return value as any
  }
}
