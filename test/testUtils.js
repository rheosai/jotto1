import checkPropTypes from 'check-prop-types';

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {String} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {String} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  )
}