import React from "react";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes
} from "react-router-dom";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import { Dashboard } from "../pages/dashboard";
import { Kanban } from '../pages/kanban'
import { AuthProvider } from "../contexts/authProvider";
import { RequiredAuth } from "../contexts/requiredAuth";
import WorkspaceLayout from "../layouts/workspaceLayout";
import BoardsLayout from "../layouts/boardsLayout";


export default function RoutesApp () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={
              <RequiredAuth>
                  <Dashboard children={<WorkspaceLayout/>}/>
              </RequiredAuth>
          }/>
          <Route path="/workspace/:id" element={
              <RequiredAuth>
                  <Dashboard children={<BoardsLayout/>}/>
              </RequiredAuth>
          }/>
          <Route path="/boards:id" element={
              <RequiredAuth>
                  <Kanban/>
              </RequiredAuth>
          }/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    
  );
}
