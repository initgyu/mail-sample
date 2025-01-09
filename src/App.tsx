import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Mail from "./components/Mail";
import Write from "./components/Write";
import "./App.css";

interface MailType {
  id: number;
  sender: string;
  content: string;
  date: string;
  isRead: boolean;
  isChecked: boolean;
}

const App: React.FC = () => {
  const [mails, setMails] = useState<MailType[]>([
    { id: 1, sender: "Alice", content: "Hello!", date: "2023-01-01", isRead: false, isChecked: false },
    { id: 2, sender: "Bob", content: "Meeting at 3PM", date: "2023-01-02", isRead: false, isChecked: false },
    { id: 3, sender: "Charlie", content: "Lunch?", date: "2023-01-03", isRead: false, isChecked: false },
  ]);

  // 전체 선택/해제 기능
  const handleCheckAll = (isChecked: boolean) => {
    setMails(mails.map(mail => ({ ...mail, isChecked })));
  };

  // 읽음 처리 기능
  const handleToggleRead = () => {
    setMails(mails.map(mail => (mail.isChecked ? { ...mail, isRead: !mail.isRead } : mail)));
  };

  // 삭제 기능
  const handleDelete = () => {
    setMails(mails.filter(mail => !mail.isChecked));
  };

  const selectedMail = mails.find(mail => mail.isChecked) || null;

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  mails={mails}
                  onCheckAll={handleCheckAll}
                  handleToggleRead={handleToggleRead}
                  onDelete={handleDelete}
                />
                <Mail mails={mails} setMails={setMails} />
              </>
            }
          />
          <Route path="/write" element={<Write selectedMail={selectedMail} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;