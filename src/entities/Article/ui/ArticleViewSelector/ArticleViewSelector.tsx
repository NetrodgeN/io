import ListIcon from '@/shared/assets/icons/bi_list.svg';
import TiledIcon from '@/shared/assets/icons/fe_tiled.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button,
    ButtonTheme,
} from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import { ArticleView } from '../../model/consts/consts';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,

    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    label={(
                        <Icon
                            className={classNames(
                                '',
                                { [cls.notSelected]: viewType.view !== view },
                            )}
                            Svg={viewType.icon}
                        />
                    )}
                />
            ))}
        </div>
    );
};

ArticleViewSelector.displayName = 'ArticleViewSelector';
