import React, {useEffect, useState} from 'react';
import './Auth.scss'
import MyInput from "../../components/MyInput/MyInput";
import MyButton from "../../components/MyButton/MyButton";
import {validation} from "../../utils/validation";

const Auth = () => {
    const authType = {
        login: "login",
        reg: "registration"
    }
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [currentAuth, setCurrentAuth] = useState(authType.login)
    const [isError, setIsError] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const changeType = () => {
        const welcomeDiv = document.getElementsByClassName("auth-welcome")[0]
        const regDiv = document.getElementsByClassName("auth-action")[0]

        welcomeDiv.style = "width: 100%"
        setTimeout(() => {
            currentAuth === authType.login ? welcomeDiv.style = "transform: translateX(100%);" : welcomeDiv.style = "transform: translateX(0%);"
            regDiv.style = currentAuth === authType.login ? " justify-content: left;" : " justify-content: right;"
            setCurrentAuth((() => authType.login === currentAuth ? authType.reg : authType.login))
        }, 1000)
    }

    const sendForm = async (emailValue, passwordValue) => {
        const emailVal = validation("email", emailValue)
        const passwordVal = validation("password", passwordValue)

        if (!emailVal.isError && !passwordVal.isError) {
            // Делаем запрос на сервер
            // const data = await fetch("")

        }
    }

    return (
        <div className="auth">
            <div className="auth-welcome">
                <h1 className="auth-welcome__title">Добро пожаловать</h1>
                <div className="auth-welcome__description">Для дальнейшего использования приложения необходимо
                    авторизоваться
                </div>
            </div>
            <div className="auth-action">
                <div className="auth-action-form">
                    <h2 className="auth-action-form__title">{currentAuth === authType.login ? "Вход" : "Регистрация"}</h2>
                    <div className="auth-action-form__email-block">
                        <label htmlFor="email">Почта:</label>
                        <MyInput type="email" id="email" placeholder="Введите почту" getValue={setEmailValue} getError={setIsError} error={emailError}/>
                    </div>
                    <div className="auth-action-form__password-block">
                        <label htmlFor="password">Пароль:</label>
                        <MyInput type="password" id="password" placeholder="Введите пароль" getValue={setPasswordValue}  getError={setIsError} error={passwordError}/>
                    </div>
                    <div className="auth-action-form__question">{authType.reg === currentAuth ? "Уже есть аккаунт?" : "Нет аккаунта?"}
                        <span className="auth-action-form__question-btn" onClick={changeType}>
                            {authType.reg === currentAuth ? "Войти" : "Зарегистрироваться"}
                        </span>
                    </div>
                    <MyButton onClick={() => sendForm(emailValue, passwordValue)} disabled={isError}>
                        {authType.reg === currentAuth ? "Зарегистрироваться" : "Войти"}
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Auth;