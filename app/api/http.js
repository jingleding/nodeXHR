const util = require('../lib/util')

class Http {
    constructor (params) {
        this.params = params
    }
    api1 (data) {
        return new Promise((resolve, reject) => {
            return util.getHttp('httpData', data).then(rs => {
                if (rs.success) {
                    return util.getHttp('httpData', {
                        pageNum: 1,
                        pageSize: 10,
                        treeId: 16,
                        recommend: 1
                    })
                } else {
                    reject(rs.description)
                }
            }).then(rs => {
                resolve(rs)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}
module.exports = Http
