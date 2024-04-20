import { addUser } from "@/actions/user";

export default function NewUserForm() {
  return (
    <form action={addUser}>
      <input type="hidden" name="flag" value="pro" />
      <div>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
