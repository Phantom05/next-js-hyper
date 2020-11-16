/**
 *
 * @param {*} string
 * foo => Foo
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
