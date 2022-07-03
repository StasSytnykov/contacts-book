import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contacts/contactsSlice";
import { getStatus } from "../../services/statusApi";
import { Form, Label, Input, Button } from "./ContactsForm.styled";
import { AiOutlineUser, AiOutlineMessage } from "react-icons/ai";

export const ContactsForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const status = await getStatus();

    const newContact = {
      id: nanoid(),
      name,
      age,
      avatar: name,
      status: status,
    };

    dispatch(addContact(newContact));
    setAge("");
    setName("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "age":
        setAge(value);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <span>
            <AiOutlineUser /> Name
          </span>
          <Input name="name" value={name} onChange={handleChange} type="text" />
        </Label>
        <Label>
          <span>
            <AiOutlineMessage />
            Age
          </span>
          <Input name="age" value={age} onChange={handleChange} type="text" />
        </Label>
        <Button type="submit"> Add Contact</Button>
      </Form>
    </>
  );
};
