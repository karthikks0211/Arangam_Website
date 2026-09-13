import { createRootRoute, createRouter } from '@tanstack/react-router'
import HomePage from './pages/HomePage'

const rootRoute = createRootRoute({
  component: HomePage,
})

export const router = createRouter({
  routeTree: rootRoute,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
