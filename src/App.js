import Profile from "components/profile/profile";
import Statistics from "components/statistics/statistics";
import FriendList from "components/friendList/friendList";
import TransactionHistory from "components/transactionHistory/transactionHistory";
import user from "json/user.json";
import data from "json/data.json";
import friends from "json/friends.json";
import transactions from "json/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </div>
  );
}
