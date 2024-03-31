import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemePropvider';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

const container = document.getElementById('root');
if (!container) {
    throw new Error('container root undefined, не удалось вмонтировать приложение');
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
