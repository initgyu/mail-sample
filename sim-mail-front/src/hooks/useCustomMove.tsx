import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { PageParam } from '../interfaces/PageParam';

export interface TCustomMove {
  moveToList: (param?: PageParam) => void;
  moveToModify: (num: number) => void;
  moveToRead: (num: number) => void;
  page: number;
  size: number;
  refresh: boolean;

  exceptionHandle: (e: any) => void;
}

const getNum = (param: string | null, defaultValue: number) => {
  if (!param) {
    return defaultValue;
  }

  return parseInt(param);
};

const useCustomMove = () => {
  const navigate = useNavigate();

  const [queryParams] = useSearchParams();

  const page = getNum(queryParams.get('page'), 1);
  const size = getNum(queryParams.get('size'), 10);

  //const queryDefault = createSearchParams({page, size}).toString()

  const moveToRead = (mailNum: number) => {
    navigate({
      pathname: `../read/${mailNum}`,
      //search:queryDefault
    });
  };
};

export default useCustomMove;
