'use client';
import { useFeature } from '@/feature/feature';
import { useStoreUser } from '@/store/user.store';

export default function userGuard(Component: any) {
  return function IsAuth(props: any) {
    const user = useStoreUser();
    const [vanSetup, setVanSetup] = useFeature('VAN_SETUP_DONE');

    function doLogin() {
      user?.setUserId('GUEST');
      setVanSetup(true);
    }

    if (!user?.state?.id) {
      return (
        <div>
          <button onClick={doLogin}>Click here to grant access</button>
        </div>
      );
    }

    return <Component {...props} />;
  };
}
