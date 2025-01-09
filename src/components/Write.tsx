import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MailType {
  id: number;
  sender: string;
  content: string;
  date: string;
  isRead: boolean;
  isChecked: boolean;
}

interface WriteProps {
  selectedMail: MailType | null;
}

const Write: React.FC<WriteProps> = ({ selectedMail }) => {
  const navigate = useNavigate();
  const [replyContent, setReplyContent] = useState<string>(
    selectedMail
      ? `작성자: ${selectedMail.sender}\n내용: ${selectedMail.content}\n\n`
      : ""
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">메일 작성</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="답장 내용을 입력하세요..."
        rows={10}
        cols={50}
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
      ></textarea>
      <br />
      <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded mr-2">보내기</button>
      <button
        className="btn btn-secondary bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => navigate("/")}
      >
        이전
      </button>
    </div>
  );
};

export default Write;