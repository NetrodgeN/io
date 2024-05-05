import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

function App() {
    const dispatch = useDispatch();
    const isInited = useSelector(getUserInited);

    React.useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense
                fallback=""
            >
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isInited && <AppRouter /> }
                </div>
            </Suspense>
        </div>
    );
}

export default App;
