import React from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = React.createContext<AnimationContextPayload>({});

// Обе либы зависят друг от друга.
// Выполнится когда оба промиса зарезолвятся.
const getAsyncAnimationModules = async () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

export const useAnimationLibs = () => React.useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: {children: React.ReactNode}) => {
    const SpringRef = React.useRef<SpringType>();
    const GestureRef = React.useRef<GestureType>();
    const [isLoaded, setIsLoaded] = React.useState(false);

    // Сохраняем либы в рефы
    React.useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = React.useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider
            value={value}
        >
            {children}
        </AnimationContext.Provider>
    );
};
