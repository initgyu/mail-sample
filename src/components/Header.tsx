import React from "react";
import { useNavigate } from "react-router-dom";

interface MailType {
  id: number;
  sender: string;
  content: string;
  date: string;
  isRead: boolean;
  isChecked: boolean;
}

interface HeaderProps {
  onCheckAll: (isChecked: boolean) => void;
  handleToggleRead: () => void;
  onDelete: () => void;
  mails: MailType[];
}

const Header: React.FC<HeaderProps> = ({ onCheckAll, handleToggleRead, onDelete, mails }) => {
  const allChecked = mails.every((mail) => mail.isChecked);
  const anyChecked = mails.some((mail) => mail.isChecked);
  const multipleChecked = mails.filter((mail) => mail.isChecked).length > 1;
  const navigate = useNavigate();

  return (
    <div className="header flex items-center p-4 bg-gray-100">
      <div className="flex items-center space-x-4 w-1/2">
        <input
          type="checkbox"
          checked={allChecked}
          onChange={(e) => onCheckAll(e.target.checked)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <button
          onClick={handleToggleRead}
          disabled={!anyChecked}
          className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          읽음/안읽음
        </button>
        <button
          onClick={onDelete}
          disabled={!anyChecked}
          className="btn btn-danger bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          삭제
        </button>
        <button
          onClick={() => navigate("/write")}
          disabled={!anyChecked || multipleChecked}
          className="btn btn-secondary bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          답장
        </button>
      </div>
    </div>
  );
};

export default Header;