export const isUser = true;

const ProctedRoute = (navigation) => {
  if (!isUser) {
    return navigation.navigate("Login");
  } else {
    return navigation.navigate("Dashboard");
  }
};

export default ProctedRoute;
