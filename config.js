let mode = "development";
export const environment = process.env;
export const NODE_ENV = environment.NODE_ENV;
export const isDevMode = Object.is(NODE_ENV, 'development');
export const isProdMode = Object.is(NODE_ENV, 'production');

  const apisMap = {
    development : {
      CLIENT_KEY: "E10461AE-AC50-4821-915C-4FA852483ECC",
      CLIENT_VALUE: "e30=",
      BASE_URL: "https://service-develop.parsdata.net/",
      NODE_ENV: `development`,
    },
    production : {
      CLIENT_KEY: "E10461AE-AC50-4821-915C-4FA852483ECC",
      CLIENT_VALUE: "e30=",
      BASE_URL: "https://service-develop.parsdata.net/",
      NODE_ENV: `production`,
    }
}
  export default apisMap[NODE_ENV]


