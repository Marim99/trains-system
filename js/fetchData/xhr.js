import { routing } from "../model.js";

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.addEventListener("load", () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
        //routing();
      }
    });
    xhr.addEventListener("error", () => {
      reject("Something went wrong!");
    });

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) => {
    console.log(responseData);
  });
};

async function sendData(email, password) {
  try {
    const responseData = await sendHttpRequest(
      "POST",
      "https://reqres.in/api/register",
      {
        email: email,
        password: password,
      },
    );
    console.log(responseData);
    if (responseData.id !== undefined) {
      routing("home", "/home.html");
    }
  } catch (err) {
    console.log(err);
  }
}

export { getData, sendData };
