import { KeysWithDiffType } from './KeysWithDiffType';
import { assertType } from './assertType';

test('disjoint type gets never', () => {
  type A = { a: 1 }
  type B = { b: 2 }
  const actual = 'a' as KeysWithDiffType<A, B>
  assertType.isNever(actual)
})

test('key with same type is not included', () => {
  type A = { a: 1 }
  const actual = 'a' as KeysWithDiffType<A, A>
  assertType.isNever(actual)
})

test('key with different type is returned', () => {
  type A = { a: 1 }
  type B = { a: 2 }
  const actual = 'a' as KeysWithDiffType<A, B>
  assertType<'a'>(actual)
})
