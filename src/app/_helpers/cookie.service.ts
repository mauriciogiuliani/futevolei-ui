export function setCookie(cookieName: string, cookieValue: any, cookieExpirationDays?: number) {
    if(cookieExpirationDays) {
        const currentDate = new Date();
        currentDate.setTime(currentDate.getTime() + (cookieExpirationDays*24*60*60*1000));
        document.cookie = cookieName + "=" + cookieValue + ';' + "expires=" + currentDate.toUTCString() + "; path=/;";
    } else {
        document.cookie = cookieName + "=" + cookieValue + "; path=/";
    }
    
}


export function getCookie(cookieName: string) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


export function removeCookie(cookieName: string) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


export function handleCredentialResponse(response : any) {
  console.log(handleCredentialResponse);
  console.log(response);
  // // decodeJwtResponse() is a custom function defined by you
  // // to decode the credential response.
  // const responsePayload = decodeJwtResponse(response.credential);

  // console.log("ID: " + responsePayload.sub);
  // console.log('Full Name: ' + responsePayload.name);
  // console.log('Given Name: ' + responsePayload.given_name);
  // console.log('Family Name: ' + responsePayload.family_name);
  // console.log("Image URL: " + responsePayload.picture);
  // console.log("Email: " + responsePayload.email);
}