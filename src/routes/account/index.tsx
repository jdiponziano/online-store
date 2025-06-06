import SignInForm from "components/forms/sign-in-form";
import SignUpForm from "components/forms/sign-up-form";
import { TwoColumnsFormsContainer } from "components/layouts/two-columns-forms-container";

const Account = () => {
  return (
    <div>
      <h1 className="sr-only">SignIn</h1>
      <TwoColumnsFormsContainer>
        <SignInForm />
        <SignUpForm />
      </TwoColumnsFormsContainer>
    </div>
  );
};

export default Account;
