export default function(context) {
  if (localStorage.getItem('token')) {
    return context.redirect('/profile');
  }
}
