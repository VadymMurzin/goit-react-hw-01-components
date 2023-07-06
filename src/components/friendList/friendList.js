import css from "./friendList.module.css";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.friendlist}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={css.item}>
            {isOnline ? <span className={css.statuson} >{isOnline}</span> : <span className={css.statusoff} >{isOnline}</span>}
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
