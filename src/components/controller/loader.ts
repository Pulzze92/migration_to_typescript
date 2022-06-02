interface  OptionsAr {
    [key: string] : string;
}

interface Res extends Loader{
    status: number,
    statusText: string,
    ok: boolean,
    json(): {
        status: string,
        sources: Array<OptionsAr>
    }
}

interface Data extends Loader{
    status?: string,
    sources?: Array<OptionsAr>
}


class Loader {
    baseLink: string;
    options: OptionsAr;
    constructor(baseLink: string, options = {} as OptionsAr | undefined) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint = '' as string, options = {} as OptionsAr | undefined},
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: OptionsAr, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: Data) => void, options = {} as OptionsAr) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: Data) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
