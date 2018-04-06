

/**
* @Method: Returns a color for a specific 
* @Param {string}
* @Return {string}
*/
export function getPlural (str: any) : string {
  return pluralize.plural(str)
}