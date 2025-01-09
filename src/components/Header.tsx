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
  const navigate = useNavigate(); // 라우터 네비게이션 훅

  return (
    <div className="header">
      <input
        type="checkbox"
        checked={allChecked}
        onChange={(e) => onCheckAll(e.target.checked)}
      />
      <button onClick={handleToggleRead}>읽음/안읽음</button>
      <button onClick={onDelete}>삭제</button>
      <button onClick={() => navigate("/write")}>답장</button>
    </div>
  );
};

export default Header;
