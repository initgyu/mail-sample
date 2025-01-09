import React from "react";
import MailItem from "./MailItem";

interface MailType {
  id: number;
  sender: string;
  content: string;
  date: string;
  isRead: boolean;
  isChecked: boolean;
}

interface MailProps {
  mails: MailType[];
  setMails: React.Dispatch<React.SetStateAction<MailType[]>>;
}

const Mail: React.FC<MailProps> = ({ mails, setMails }) => {
  const handleCheck = (id: number, isChecked: boolean) => {
    setMails(mails.map(mail => (mail.id === id ? { ...mail, isChecked } : mail)));
  };

  return (
    <div className="mail-list">
      {mails.map(mail => (
        <MailItem key={mail.id} mail={mail} onCheck={handleCheck} />
      ))}
    </div>
  );
};

export default Mail;
