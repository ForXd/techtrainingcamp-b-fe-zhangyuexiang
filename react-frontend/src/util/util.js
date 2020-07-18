
// handle get
const get = function({url}) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            }
        }
    })
}
// cached get
const cacheQuery = function({url, data}) {
    const cache = cacheQuery.cache || (cacheQuery.cache = new Map());
    let query = [];
    for (let key in data) {
        query.push(`${key}=${encodeURIComponent(data[key])}`);
    }
    url += '?' + query.join('&');
    if (cache.has(url)) {
        console.log('cache: ' + url);
        return Promise.resolve(cache.get(url));
    }
    return get({url}).then(
        res => {
            console.log('get and cache: ' + url);
            cache.set(url, res);
            return res;
        }
    )
}

const debounce = function(fun, second) {
    let timer = null;
    return function() {
        let context = this;
        let args = [].slice.call(arguments);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fun.apply(context, args)
        }, second*1000);
    }
}

const timeFormat = (time) => {
    let now = Date.now();
    let prev = new Date(time);
    let diff = now - prev.getTime();

    let formatDate = function (val) {
        const padDate = function(val) {
            val = val < 10 ? '0' + val : val;
            return val;
        }
        let value=new Date(val);
        let year=value.getFullYear();
        let month=padDate(value.getMonth()+1);
        let day=padDate(value.getDate());
        let hour=padDate(value.getHours());
        let minutes=padDate(value.getMinutes());
        let seconds=padDate(value.getSeconds());
        return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
    }

    if (diff < 1000 * 60 * 5) {
        return '刚刚';
    } else if (diff >= 1000 * 60 * 5 && diff < 1000 * 60 * 60) {
        return `${Math.floor(diff / (1000 * 60))}分钟前`;
    } else if (diff >= 1000 * 60 * 60 && diff < 1000 * 60 * 60 * 24) {
        return `${Math.floor(diff / (1000 * 60 * 60))}小时前`;
    } else if (diff >= 1000 * 60 * 60 * 24 && diff < 1000 * 60 * 60 * 24 * 30) {
        return `${Math.floor(diff / (1000 * 60 * 60 * 24))}天前`;
    } else {
        return formatDate(time);
    }

}

export { cacheQuery, debounce, timeFormat };