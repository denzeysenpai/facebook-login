const fb_src = import.meta.env.VITE_FB_SRC;

export function InitializeFB (d : Document, s : string, id : string) {
    try {
        var js,
        fjs = d.getElementsByTagName(s)[0];
        // if (d.getElementById(id)) return;
    
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = fb_src
        fjs.parentNode?.insertBefore(js, fjs);
    } catch (err) {
        console.error(err)
    }
}

