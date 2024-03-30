export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
    User,
    UserSchema,
    UserRole,
} from './model/types/user';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors';

export {
    userReducer,
    userActions,
} from './model/slice/userSlice';
