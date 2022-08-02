import server from '@utils/request'

export const getAction = function (url: string, params: object | undefined) {
    return server({
        url,
        method: 'get',
        params
    })
}

export const postAction = function (url: string, data: object) {
    server({
        url,
        method: 'post',
        data
    })
}