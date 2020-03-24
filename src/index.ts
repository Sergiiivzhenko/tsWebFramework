import {rootUrl, User, UserProps} from "./models/User";
import {Collection} from "./models/Collection";
import {UserList} from "./views/UserList";

const users = new Collection(rootUrl, (json: UserProps) => {
    return User.buildUser(json);
});
users.on('change', () => {
    const root = document.getElementById('root');
    console.log(root, users);
    if (root) {
        new UserList(root, users).render();
    }
});
users.fetch();