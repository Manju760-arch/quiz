import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // ✅ Dynamic route (FIX)
  {
    path: 'quiz/:subject',
    renderMode: RenderMode.Server
  },

  // ✅ Static routes (optional)
  {
    path: '',
    renderMode: RenderMode.Prerender
  },

  // ✅ Fallback
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];