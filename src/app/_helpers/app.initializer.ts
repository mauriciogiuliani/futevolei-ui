import { LoginService } from "../login/login.service";

declare const FB: any;

declare const google: any;

export function appInitializer() {
    return () => new Promise(resolve => {

        // wait for facebook sdk to initialize before starting the angular app
        (window as any).fbAsyncInit = function () {
            FB.init({
                appId: '1123466031780514',
                cookie: true,
                xfbml: true,
                version: 'v8.0'
            });
        }
        
        // google.accounts.id.initialize({
        //     client_id: "714491587198-mg6o6k2hfh94o4smdl50amspgj52qrm4.apps.googleusercontent.com"
        //   });

        resolve(true);
    });

    
}