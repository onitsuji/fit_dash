import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("sign-up", "./routes/sign-up.tsx"),
  route("sign-in", "./routes/sign-in.tsx"),
  layout("./layout/dashboard-layout.tsx", [
    route("dashboard", "./routes/dashboard/dashboard.tsx"),
  ]),
] satisfies RouteConfig;
