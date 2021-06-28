import * as Constants from "../constants/urls";

export const signin = (emailId, passwordCheck) => {
    const URL = Constants.BASE_URL+Constants.SUB_URL+Constants.Sign_In;

    let formdata = new FormData();
    formdata.append("email", emailId)
    formdata.append("password",passwordCheck)
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
          },
        body: formdata
    })
    .then((response) => response.json()).then((json) => {
        return json
    }).catch((error) => {
        console.error(error);
    });
}

export const signup = (fullName, contactNo, emailId, passwordCheck) => {
    const URL = Constants.BASE_URL+Constants.SUB_URL+Constants.SIGN_UP;
    let formdata = new FormData();
    formdata.append("full_name", fullName)
    formdata.append("contact_no",contactNo)
    formdata.append("email",emailId)
    formdata.append("password",passwordCheck)

    return fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        body: formdata
    })
    .then((response) => response.json()).then((json) => {
        return json
    }).catch((error) => {
        console.error(error);
    });
}