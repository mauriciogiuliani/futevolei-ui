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