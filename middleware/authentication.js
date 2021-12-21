export default function(context) {
  if (!localStorage.getItem('token')) {
    sessionStorage.setItem('previousRoute', context.route.fullPath);
    return context.redirect("/users/signin-up");
  }
}
