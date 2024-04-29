import React from 'react';

import {
    StateSchema,
    StoreProvider,
} from '@/app/providers/StoreProvider';
// eslint-disable-next-line
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { userReducer } from '@/entities/User';
// eslint-disable-next-line
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
// eslint-disable-next-line
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
// eslint-disable-next-line
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
// eslint-disable-next-line
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
// eslint-disable-next-line
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Story } from '@storybook/react';

const defaultAsyncReducers: ReducersList = {
    user: userReducer,
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
