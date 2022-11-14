import { useAuth } from '../context/AuthContext'

// ログアウトとかもいれてちゃんとしたヘッダーにする

const Header = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser);

  return (
    <div style={{ padding: "1rem 0" }} >
      { currentUser ? (
        <div suppressHydrationWarning={true}>{ currentUser.email } でログインしています。</div>
      ):(
        <div suppressHydrationWarning={true}>ログインしていません。</div>
      )}
    </div>
  );
}

export default Header;