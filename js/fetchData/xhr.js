import { routing } from "../model.js";
import { showAllTrains } from "../view.js";

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
//"https://reqres.in/api/users"
const getData = (url) => {
  sendHttpRequest("GET", url).then((responseData) => {
    console.log(responseData.data);
  });
};
const showAllDataOfTrains = (url) => {
  sendHttpRequest("GET", url).then((responseData) => {
    responseData.data.forEach((e) => {
      let trainId = e.id;
      let trainState = e.name;
      console.log(trainId);
      console.log(trainState);
      showAllTrains(trainId, trainState);
    });
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
    alert("Only defined users succeed registration");
    document.querySelector("#user-id").value = "";
    document.querySelector("#user-password").value = "";
  }
}

export { getData, sendData, showAllDataOfTrains };
