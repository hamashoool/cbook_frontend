// @flow
import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";

type Props = {
};
export const LoginLayout = (props: Props) => {

    return (
        <>
            <div className="login">
                <Routes>
                    <Route
                        index
                        element={ <LoginPage /> }/>
                </Routes>
            </div>
        </>
    );
};