
declare const FB: any;

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

        resolve(true);
    });

    
}