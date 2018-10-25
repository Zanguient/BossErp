//封装的请求  带超时
const _timeout = 30 * 1000;  //默认30秒

//GET请求
function GET(url, version, timeout = _timeout) {

    let dispatchTimeout = null;

    let timeoutPromise = new Promise((resolve, reject) => {
        dispatchTimeout = () => {
            reject('请求超时')
        }
    });

    setTimeout(() => {
        dispatchTimeout();
    }, timeout);

    let getPromise = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-version': version,
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                resolve(responseData)
            })
            .catch((error) => {
                reject(error);
            })
    });

    return Promise.race([getPromise, timeoutPromise]);
}

//POST请求
function POST(url, version, body, timeout = _timeout) {

    let dispatchTimeout = null;

    let timeoutPromise = new Promise((resolve, reject) => {
        dispatchTimeout = () => {
            reject('请求超时')
        }
    });

    setTimeout(() => {
        dispatchTimeout();
    }, timeout);

    let postPromise = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-version': version,
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((responseData) => {
                resolve(responseData)
            })
            .catch((error) => {
                reject(error)
            });
    });

    return Promise.race([postPromise, timeoutPromise]);
}

export {GET, POST}
