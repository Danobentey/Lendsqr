export enum Layout {
  Admin = '/admin',
  Auth = '/',
}

const createAdminPath = (route: string) => {
  return `${Layout.Admin}/${route}`;
};

export const pageRoutes = {
  LOGIN: '/login',
  USERS: createAdminPath('users'),
  DASHBOARD: createAdminPath('dashboard'),
  ALL_USERS: createAdminPath('users/all'),
}