export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
    type User,
    type UserSchema,
} from './model/types/user';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors';

export {
    userReducer,
    userActions,
} from './model/slice/userSlice';
export { UserRole } from './model/consts/consts';
