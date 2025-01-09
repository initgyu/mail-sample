import React from "react";

interface MailType {
  id: number;
  sender: string;
  content: string;
  date: string;
  isRead: boolean;
  isChecked: boolean;
}

interface MailItemProps {
  mail: MailType;
  onCheck: (id: number, isChecked: boolean) => void;
}

const MailItem: React.FC<MailItemProps> = ({ mail, onCheck }) => {
  return (
    <div
      className="mail-item"
      style={{ color: mail.isRead ? "gray" : "black" }}
    >
      <input
        type="checkbox"
        checked={mail.isChecked}
        onChange={(e) => onCheck(mail.id, e.target.checked)}
      />
      <span>{mail.sender}</span>
      <span>{mail.content}</span>
      <span>{mail.date}</span>
    </div>
  );
};

export default MailItem;
