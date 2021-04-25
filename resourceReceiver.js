const fs = require("fs");
const axios = require("axios");

const resource = {
  NODE_CONFIG_TOKEN:
    "e5IfPW4nBrivU9I38d7eXQPMAXknZ5p1OuG2zsb6QIJVbB8LOz7Mt4mBc6GKC4yPMi_tZcWyNO4ht1Tn6Mrv3-IoaeBviwScCCTECln3bKA2CPL65remc9N7__TmYtgOfVkLrb9hq0PjMsOlHgS6HQDKr3UXHkJgBFj-7oSMdO3dc8RB6Kaca6wX000fnUsGRrAh1WoQLqWL8ei_J7_dzdmSirflNlkUzEBKSOGE7a0xMmy6r2P_BVsXH9FHyaGy",
      NODE_CONFIG_PATH: "./assets/resource.json",
    NODE_CONFIG_RESOURCE_TOKEN: "http://api.tech.parsdata.com/token",
    NODE_CONFIG_RESOURCE_DATA: "http://api.tech.parsdata.com/resource",
};

axios({
  url: resource.NODE_CONFIG_RESOURCE_TOKEN,
  method: "post",
  headers: {
    Authorization: `Bearer ${resource.NODE_CONFIG_TOKEN}`,
    "Content-Type": "application/json",
  },
  data: {
    username: "test",
    password: "test",
    api_key: "GAFCCGHIFFL-5E9C91B8-BB8B-4CDB-809E-5066E9F97F1B",
  },
})
  .then((result) => {
    axios({
      url: resource.NODE_CONFIG_RESOURCE_DATA,
      method: "post",
      headers: {
        Authorization: `Bearer ${result.data.token}`,
        "Content-Type": "application/json",
      },
      data: {
        system_id: 4,
        culture: "fa-IR",
      },
    })
      .then((result) => {
        if (fs.existsSync(resource.NODE_CONFIG_PATH)) {
          fs.unlinkSync(resource.NODE_CONFIG_PATH);
        }
        const rootElement = result.data.resources.rootElement;
        const lbakAnlDpwa = rootElement.filter(
          (resource) =>
            resource.text_key.includes("lbak.") ||
            resource.text_key.includes("lpwa.")
        );
        const res = {
          ...result,
          data: {
            ...result.data,
            resources: {
              ...result.data.resources,
              rootElement: lbakAnlDpwa,
            },
          },
        };
        const jsonContent = JSON.stringify(res.data);
        fs.writeFile(resource.NODE_CONFIG_PATH, jsonContent, "utf8", function(err) {
          if (err) {
            console.log(
              "An error occurred while writing JSON Object to resource.json"
            );
            return console.log(err);
          }
          console.log("resource.json file has been saved with latest changes");
        });
      })
      .catch((err) => {
        console.log("ERROR!!!!", err);
      });
  })
  .catch((err) => {
    console.log("ERROR!!!!", err);
  });
