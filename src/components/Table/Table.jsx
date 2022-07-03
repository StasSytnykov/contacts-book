import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { AiOutlineDelete } from "react-icons/ai";
import {
  TableStyled,
  DivThumb,
  TrHead,
  TableBodyTd,
  TableBodyTh,
  Span,
} from "./Table.styled";
import { getContacts } from "../../redux/contacts/contactsSelectors";
import {
  deleteContact,
  updateStatus,
} from "../../redux/contacts/contactsSlice";
const tableHeaders = ["№", "avatar", "name", "age", "status", "option"];

export const Table = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => dispatch(deleteContact(id));
  const handleClickStatus = (id) => {
    dispatch(updateStatus(id));
  };

  return (
    <>
      {contacts.length >= 0 ? (
        <DivThumb>
          <TableStyled>
            <thead>
              <TrHead>
                {tableHeaders.map((item, index) => (
                  <TableBodyTh key={index}>{item}</TableBodyTh>
                ))}
              </TrHead>
            </thead>
            <tbody>
              {contacts.map(({ id, name, age, avatar, status }, index) => (
                <TrHead key={id}>
                  <TableBodyTd>{index + 1}</TableBodyTd>
                  <TableBodyTd>
                    <Avatar size={40} round={true} name={avatar} />
                  </TableBodyTd>
                  <TableBodyTd>{name}</TableBodyTd>
                  <TableBodyTd>{age}</TableBodyTd>
                  <TableBodyTd onClick={() => handleClickStatus(id)}>
                    <Span isOnline={status}>
                      {status === true ? "online" : "offline"}
                    </Span>
                  </TableBodyTd>
                  <TableBodyTd>
                    <button
                      onClick={() => handleDeleteContact(id)}
                      type="button"
                    >
                      <AiOutlineDelete />
                    </button>
                  </TableBodyTd>
                </TrHead>
              ))}
            </tbody>
          </TableStyled>
        </DivThumb>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
