
/**
 * @function fetchWrapper
 * @param {string} arg1 - REST method | url
 * @param {string} [url] - url
 * @param {Object} [body] - body of message
 * @description
 *   Wrapper for the fetch api that provides options defaults and base response code handling.
 * @return {Promise<Object>} A promise containing the deserialized response object.
 * */
export const fetchWrapper = (arg1, url, body, additionalOptions) => {
  // if called with one argument, default to 'GET' method
  const _method = url ? arg1.toUpperCase() : 'GET';
  // if called without method arg, the first
  const _url = url || arg1;

  const options = {
    method: _method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: 'no-cache',
    },
    body: body && JSON.stringify(body), // body can be undefined, that's ok
    ...additionalOptions,
  };

  return fetch(_url, options).then(handleResponse);
};

/**
 * @function handleResponse
 * @param {Object} response - The repsonse object.
 * @description
 *   A handler for the fetch response Object
 * @return {Promise<Object>} A promise containing the deserialized response object.
 * */
export const handleResponse = async response => {

  const res = await response.json();

  if (response.status < 200 || response.status >= 300) {
    throw new Error(
      `There has been an error. Response status: ${response.status}`
    );
  }

  return res;
};