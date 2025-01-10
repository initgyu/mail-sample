import { lazy } from 'react';
const Write = lazy(() => import('../pages/Mailbox/Write'));
const List = lazy(() => import('../pages/Mailbox/List'));
const Read = lazy(() => import('../pages/Mailbox/Read'));
const BasicRead = lazy(() => import('../pages/Settings/Basic/Read'));
const BasicWrite = lazy(() => import('../pages/Settings/Basic/Write'));
const BasicList = lazy(() => import('../pages/Settings/Basic/List'));
const BasicSign = lazy(() => import('../pages/Settings/Basic/Sign'));
const MailboxManagement = lazy(() => import('../pages/Settings/Mailbox/Management'));
const MailboxClean = lazy(() => import('../pages/Settings/Mailbox/Clean'));
const ClassificationFilter = lazy(() => import('../pages/Settings/Classification/Filter'));
const AbsenceSetting = lazy(() => import('../pages/Settings/Absence/Setting'));
const SpamSetting = lazy(() => import('../pages/Settings/Spam/Setting'));
const SpamKeyword = lazy(() => import('../pages/Settings/Spam/Keyword'));
const SpamAllow = lazy(() => import('../pages/Settings/Spam/Allow'));
const SpamReject = lazy(() => import('../pages/Settings/Spam/Reject'));
const SmtpPop3 = lazy(() => import('../pages/Settings/Smtp/Pop3'));
const SmtpImap = lazy(() => import('../pages/Settings/Smtp/Imap'));

const routes = [
  // dashboard
  {
    path: '/',
    element: <List />,
  },
  {
    path: '/mailbox/write',
    element: <Write />,
  },
  {
    path: '/mailbox/write?toMe',
    element: <Write />,
  },
  {
    path: '/mailbox/list/:list',
    element: <List />,
  },
  {
    path: '/mailbox/read',
    element: <Read />,
  },
  {
    path: '/settings',
    element: <BasicRead />,
  },
  {
    path: '/settings/basic/write',
    element: <BasicWrite />,
  },
  {
    path: '/settings/basic/list',
    element: <BasicList />,
  },
  {
    path: '/settings/basic/sign',
    element: <BasicSign />,
  },
  {
    path: '/settings/mailbox/management',
    element: <MailboxManagement />,
  },
  {
    path: '/settings/mailbox/clean',
    element: <MailboxClean />,
  },
  {
    path: '/settings/classification/filter',
    element: <ClassificationFilter />,
  },
  {
    path: '/settings/absence/setting',
    element: <AbsenceSetting />,
  },
  {
    path: '/settings/:spam/setting',
    element: <SpamSetting />,
  },
  {
    path: '/settings/:spam/keyword',
    element: <SpamKeyword />,
  },
  {
    path: '/settings/:spam/allow',
    element: <SpamAllow />,
  },
  {
    path: '/settings/:spam/reject',
    element: <SpamReject />,
  },
  {
    path: '/settings/smtp/pop3',
    element: <SmtpPop3 />,
  },
  {
    path: '/settings/smtp/imap',
    element: <SmtpImap />,
  },
];

export { routes };
