import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/Home.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import AboutIcon from '@/shared/assets/icons/list.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from "@/shared/const/router";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Главная',
                Icon: MainIcon,
            },
            {
                path: RoutePath.about,
                text: 'О сайте',
                Icon: AboutIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Статьи',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
