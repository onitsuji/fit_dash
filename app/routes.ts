import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("signup", "./routes/sign-up.tsx"),
  route("signin", "./routes/sign-in.tsx"),
  layout("./layout/dashboard-layout.tsx", [
    route("dashboard", "./routes/dashboard/dashboard.tsx"),
  ]),
] satisfies RouteConfig;
