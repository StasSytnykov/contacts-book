import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { getContacts } from "../../redux/contacts/contactsSelectors";
import { deleteContact } from "../../redux/contacts/contactsSlice";
const tableHeaders = ["№", "avatar", "name", "age", "status", "option"];

export const Table = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <>
      {contacts.length >= 0 ? (
        <table>
          <thead>
            <tr>
              {tableHeaders.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contacts.map(({ id, name, age, avatar, status }, index) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <Avatar size={40} round={true} name={avatar} />
                </td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{status === "yes" ? "online" : "offline"}</td>
                <td>
                  <button onClick={() => handleDeleteContact(id)} type="button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
