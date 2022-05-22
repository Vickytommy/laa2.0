export const AllRoutes = {
  Dashboard: { path: "/" },
  Courses: { path: "/courses"},
  // CourseDetails: (id) => `path: /courses/${id}`,
  CourseDetails: { path: (id) => `/courses/${id}`},
};