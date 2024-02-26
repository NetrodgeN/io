import React from 'react';

import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = React.lazy<React.FC<LoginFormProps>>(() => import('./LoginForm'));
