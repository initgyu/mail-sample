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
    <div className="mail-item flex items-center space-x-4 p-4 border-b">
      <input
        type="checkbox"
        checked={mail.isChecked}
        onChange={(e) => onCheck(mail.id, e.target.checked)}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <div className="mail-content flex-1 flex items-center space-x-4">
        <div className="mail-sender font-bold">작성자: {mail.sender}</div>
        <div className="mail-snippet">내용: {mail.content}</div>
        <div className="mail-date text-gray-500">{mail.date}</div>

      </div>
    </div>
  );
};

export default MailItem;