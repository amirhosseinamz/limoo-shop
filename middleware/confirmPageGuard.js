export default function({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.userAuth) {
        return redirect("/");
    } else if (!store.state.userAuth) {
        return redirect("/users/signin-up");
    }
}
