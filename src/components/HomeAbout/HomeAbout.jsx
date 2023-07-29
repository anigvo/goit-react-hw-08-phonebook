import { Span } from './HomeAbout.styled';

export function HomeAbout() {
  return (
    <div>
      <h1>Hello! This is phonebook home page!</h1>
      <p>
        This application will allow you to conveniently save the numbers of your
        friends, acquaintances, family members and colleagues. To get started,
        register using the <Span>REGISTER</Span> button or go to your existing
        account using the <Span>LOG IN</Span> button.
      </p>
    </div>
  );
}
