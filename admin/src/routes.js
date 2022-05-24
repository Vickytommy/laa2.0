export const AllRoutes = {
  Dashboard: { path: "/" },
  Courses: { path: "/courses"},
  CourseDetails: { path: (id) => `/courses/${id}`},
  MarketPlace: { path: "/marketplace"},
  MarketPlaceDetails: { path: (id) => `/marketplace/${id}`},
};