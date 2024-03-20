import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import constants from "../app/constants";

const http = axios.create({
  baseURL: constants.webApi.API_BASE_URL,
});

export const setupInterceptor = async (store) => {
  http.interceptors.request.use(
    async (config) => {
      const token = ""; // get token from reducer

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  http.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401) {
        // store.dispatch(resetMe()); // reset token reducer
        await AsyncStorage.clear();
      }
      return Promise.reject(error);
    }
  );
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
const fetchGetRequest = async (endpoint, extraConfig = {}) => {
  try {
    return await http.get(endpoint, {
      // headers: {
      //   'Accept-Encoding': 'application/gzip',
      // },
      ...extraConfig,
    });
  } catch (err) {
    throw err.response;
  }
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
const fetchPostRequest = async (endpoint, payload, extraConfig = {}) => {
  try {
    return await http.post(endpoint, payload, {
      headers: {
        "Accept-Encoding": "*",
      },
      ...extraConfig,
    });
  } catch (error) {
    throw error.response;
  }
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
const fetchMultipartPostRequest = async (
  endpoint,
  payload,
  extraConfig = {}
) => {
  try {
    return await http.post(endpoint, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        // 'Accept-Encoding': 'application/gzip',
      },
      ...extraConfig,
    });
  } catch (error) {
    throw error.response;
  }
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
const fetchPutRequest = async (endpoint, payload, extraConfig = {}) => {
  try {
    return await http.put(endpoint, payload, {
      // headers: {
      //   'Accept-Encoding': 'application/gzip',
      // },
      ...extraConfig,
    });
  } catch (err) {
    throw err.response;
  }
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
const fetchMultipartPutRequest = async (
  endpoint,
  payload,
  extraConfig = {}
) => {
  try {
    return await http.put(endpoint, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        // 'Accept-Encoding': 'application/gzip',
      },
      ...extraConfig,
    });
  } catch (error) {
    throw error.response;
  }
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
const fetchPatchRequest = async (endpoint, payload, extraConfig = {}) => {
  try {
    return await http.patch(endpoint, payload, {
      // headers: {
      //   'Accept-Encoding': 'application/gzip',
      // },
      ...extraConfig,
    });
  } catch (err) {
    throw err.response;
  }
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {any} payload - Required API inputs
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
const fetchMultipartPatchRequest = async (
  endpoint,
  payload,
  extraConfig = {}
) => {
  try {
    return await http.patch(endpoint, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        // 'Accept-Encoding': 'application/gzip',
      },
      ...extraConfig,
    });
  } catch (error) {
    throw error.response;
  }
};

/**
 *
 * @param {string} endpoint - Path to resource endpoint
 * @param {import("axios").AxiosRequestConfig} extraConfig - additional axios settings for the request
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
const fetchDeleteRequest = async (endpoint, extraConfig = {}) => {
  try {
    return await http.delete(endpoint, {
      // headers: {
      //   'Accept-Encoding': 'application/gzip',
      // },
      ...extraConfig,
    });
  } catch (err) {
    throw err.response;
  }
};

const handlers = {
  fetchGetRequest,
  fetchPostRequest,
  fetchMultipartPostRequest,
  fetchPutRequest,
  fetchMultipartPutRequest,
  fetchPatchRequest,
  fetchMultipartPatchRequest,
  fetchDeleteRequest,
};

export { handlers };
