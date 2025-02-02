import '@/components/features/Router/Router.scss';

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from '@/components/features/Router/ProtectedRoute';
import PublicRoute from '@/components/features/Router/PublicRoute';
import AdminLayout from '@/modules/admin/AdminLayout';
import AuthLayout from '@/modules/auth/AuthLayout';
import PostsLayout from '@/modules/posts/PostsLayout';
import { selectCurrentUser } from '@/store/auth/authSlice';

const Router = ({ children }) => {
  const isAuthenticated = useSelector(selectCurrentUser);
  return (
    <Routes>
      {children}
      {/* Public Routes */}
      <Route
        path="auth/*"
        element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <AuthLayout />
          </PublicRoute>
        }
      />
      {/* Protected Routes */}
      <Route
        path="admin/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AdminLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="posts/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <div className="router__posts-layout-wrapper">
              <PostsLayout />
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
