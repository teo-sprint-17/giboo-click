import SignUp from '@/components/SignUp/SignUp';
import LayerLayout from '@/components/common/LayerLayout';
import { Suspense } from 'react';

const SignUpPage = () => {
  return (
    <LayerLayout>
      <Suspense>
        <SignUp />
      </Suspense>
    </LayerLayout>
  );
};

export default SignUpPage;
