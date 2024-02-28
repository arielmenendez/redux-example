import { useSelector } from 'react-redux';
import { UserState } from '../redux/userSlice';

export const Header = () => {
  const user = useSelector((state: { user: UserState }) => state.user);

  return (
    <header>
      <h1>Redux Toolkit Example</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Username: {user.username}</li>
      </ul>
    </header>
  );
};
