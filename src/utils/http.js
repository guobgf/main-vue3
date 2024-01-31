import axios from "axios";

const Net = {
    getJson: function (url, params) {
        return new Promise(function (resolve, reject) {
            axios.get(url, params).then(function (res) {
                resolve(res)
            }).catch(function (err) {
                reject(err)
            })
        })
    },
    postJson: function (url, params) {
        return new Promise(function (resolve, reject) {
            axios.post(url, params).then(function (res) {
                resolve(res)
            }).catch(function (err) {
                reject(err)
            })
        })
    }
}

export default Net