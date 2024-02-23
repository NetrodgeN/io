import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/CopyIcon.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = React.memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = React.useCallback(async () => {
        await navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>

            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                label={<CopyIcon className={cls.copyIcon} />}
                theme={ButtonTheme.CLEAR}
            />
            <code>
                {text}
            </code>
        </pre>
    );
});

Code.displayName = 'Code';
