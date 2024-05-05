import React from 'react';

import {
    StateSchema,
    StoreProvider,
} from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
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
