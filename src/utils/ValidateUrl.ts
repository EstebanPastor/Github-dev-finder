export function validateURL(url: string) {
    // verificar si la URL empieza con "http:// o "https//
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }
    return url
}