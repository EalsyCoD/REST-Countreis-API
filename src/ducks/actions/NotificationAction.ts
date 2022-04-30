import { DispatchNotificationType } from '../../types'

const setNotification = (message: string, status: number, time: number) => {
    return async (dispatch: DispatchNotificationType) => {
        dispatch({
            type: 'NEW-NOTIFICATION',
            payload: {
                message: message,
                status: status,
            },
        })
        setTimeout(
            () =>
                dispatch({
                    type: 'CLEAR-NOTIFICATION',
                    payload: {
                        message: null,
                        status: null
                    }
                }),
            time * 1000
        )
    }
}

export { setNotification }