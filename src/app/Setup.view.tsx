import React, { FC, useEffect } from "react";
import { AppNavigation } from '../navigation';
import { Loading } from "../components";
/* 
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import { ISessionStore, IUserStore } from "../stores/interfaces"; */

/* interface ISetupProps {
    sessionStore?: ISessionStore;
    userStore?: IUserStore;
} */

const Setup: FC = ({ }) => {

    const auth = false;
    const loading = false;

    if (auth) {
        //GET ALL BEFORE ENTER MAIN PAGE
        return (
            <>
                <AppNavigation authenticated={true} />
            </>
        )
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <AppNavigation authenticated={false} />
        </>
    )
}

export default Setup;