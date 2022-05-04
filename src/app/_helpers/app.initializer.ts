import { LoginService } from "../login/login.service";
import { AuthenticationService } from "../_authentication/authentication.service";

declare const FB: any;
declare const google: any;

declare const window: any

export function appInitializer(authenticationService: AuthenticationService) {
    return () => new Promise(resolve => {

        // wait for facebook sdk to initialize before starting the angular app
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1123466031780514',
                cookie: true,
                xfbml: true,
                version: 'v8.0'
            });
        }

        // window.onload = function () {
        //     google.accounts.id.initialize({
        //         client_id: "714491587198-mg6o6k2hfh94o4smdl50amspgj52qrm4.apps.googleusercontent.com",
        //         callback: authenticationService.googleLoginCallback
        //     });
        // }

        resolve(true);
    });


}