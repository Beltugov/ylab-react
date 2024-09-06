export const validation = (type, value) => {
    let isError = false
    let message = null

    if (type !== "email" && type !== "password") return



    if (type === "password" && value.length < 6) {
        isError = true
        message = "Пароль меньше 6 символов"
    }
    if (type === "password" && value.length > 24) {
        isError = true
        message = "Пароль больше 24 символов"
    }


    if (type === "email") {
        const regexCheck = value
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!regexCheck) {
            isError = true
            message = "Некорректная  почта"
        }
    }

    if (value.trim() === "") {
        isError = true
        message = "Поле не может быть пустым!"
    }


    return {
        isError,
        message
    }
}