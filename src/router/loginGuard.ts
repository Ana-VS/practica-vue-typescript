import { RouteLocation } from "vue-router";

const logInGuard = ( to: RouteLocation, from: RouteLocation, next: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    next();
  } else {
    next({ name: "login" });
  }
};

export default logInGuard;