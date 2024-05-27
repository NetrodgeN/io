import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/Home.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import AboutIcon from '@/shared/assets/icons/list.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная',
                Icon: MainIcon,
            },
            {
                path: getRouteAbout(),
                text: 'О сайте',
                Icon: AboutIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    text: 'Статьи',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
