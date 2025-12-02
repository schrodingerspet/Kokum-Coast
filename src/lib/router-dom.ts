import * as ReactRouterDOM from 'react-router-dom';

const RRD = ReactRouterDOM as any;

export const createBrowserRouter = RRD.createBrowserRouter || RRD.default?.createBrowserRouter;
export const createMemoryRouter = RRD.createMemoryRouter || RRD.default?.createMemoryRouter;
export const RouterProvider = RRD.RouterProvider || RRD.default?.RouterProvider;
export const Outlet = RRD.Outlet || RRD.default?.Outlet;
export const Link = RRD.Link || RRD.default?.Link;
export const useLocation = RRD.useLocation || RRD.default?.useLocation;
