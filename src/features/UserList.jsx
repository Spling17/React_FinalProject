import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { deleteUser } from "./userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }

  const renderCard = () => users.map(user => (
    <div className="user-card" key={user.id}>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <div className="edit-delete-button">
        <Link to={`edit-user/${user.id}`}>
          <button className="edit-button">Edit</button>
        </Link>
        <button
          className="delete-button"
          onClick={() => handleRemoveUser(user.id)}>Delete
        </button>
      </div>
    </div>
  ))

  return (
    <div>
      <Link to="/add-user">
        <Button className="add-button">Add User</Button>
      </Link>
      <div className="user-list">
        {users.length ? renderCard() : <p>No User</p>}
      </div>
    </div>
  )
}

export default UserList