import React from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export function useModal({
    animationDelay,
    isOpen,
    onClose,
}: UseModalProps) {
    const [isClosing, setIsClosing] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);
    const timerRef = React.useRef() as React.MutableRefObject<ReturnType<typeof setTimeout>>;

    React.useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = React.useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    // Новые ссылки!!!
    const onKeyDown = React.useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        isMounted,
        close,
    };
}
