import { AppError } from '#/classes/ErrorHandling'
import { setLoading } from '#/state/slices/network'
import { showToast } from '#/state/slices/ui'
import store from '#/state/store'
import { ToastConfigType } from '#/types/uiTypes'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios'



const handleErrorDisplay = (err: AppError) => {
    console.log("err: ", err.toastError)
    if (err.toastError) {
        store.dispatch(showToast({
            ...err.toastError as ToastConfigType
        }))
    }
}

const handleAxios = async (method: Method, url: string, data?: object, config?: AxiosRequestConfig) => {
    store.dispatch(setLoading(true))
    try {
        const res = await axios({
            url: url,
            method: method,
            ...(data && { data: data }),
            ...(config && { ...config }),
        })
        store.dispatch(setLoading(false))
        console.log("res", res.data)
        return res
    } catch (rr) {
        store.dispatch(setLoading(false))
        const r = rr as AxiosError
        const err = r.response as AxiosResponse<{ error?: AppError }>
        if (err?.data?.error) {
            handleErrorDisplay(err?.data?.error)
        }
        return
    }
}

export default handleAxios
