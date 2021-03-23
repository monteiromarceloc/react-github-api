import React, { useCallback, useEffect, useState } from 'react';
import { apiService } from '../../services/api';
import { Button, LogoutButton } from '../../components';
import { Main, ProjectContent, Column, CardContainer, Title, Text, Flag } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setIsAuthenticated } from '../../store/MainReducer';

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector(state => state.MainReducer.isAuthenticated)
  const [columns, setColumns] = useState();
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        const res = await apiService.getColumns()
        setColumns(res);
      }
      fetchData()
    } else {
      history.push('/login');
    }
  }, [isAuthenticated, history])

  const onLogout = () => {
    dispatch(setIsAuthenticated(false));
    history.push('/login');
  }

  if (!isAuthenticated) return <Main />

  return (
    <Main>
      <h1>Cifra Club Mobile - Downstream</h1>
      <Button float onClick={() => setTrigger((old) => old + 1)}>Save Columns</Button>
      <LogoutButton onClick={onLogout} />
      <ProjectContent>
        {
          columns?.map(e =>
            <ColumnComponent data={e} onUpdate={trigger} key={e.id} />
          )
        }
      </ProjectContent>
    </Main>
  );
}

export default HomePage;

const ColumnComponent = ({ data, onUpdate }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiService.getCards(data.id)
      setCards(res);
    }
    fetchData();
  }, [data]);

  useEffect(() => {
    if (onUpdate > 0) {
      updateFB();
    }
    // eslint-disable-next-line
  }, [onUpdate])

  const updateFB = useCallback(async () => {
    apiService.updateFB(data.id, cards);
  }, [cards, data.id])

  return <Column>
    <Title>{data.name}</Title>
    {
      cards?.map(e => <CardComponent data={e} key={e.id} />)
    }
  </Column>
}

const CardComponent = ({ data }) => {
  const [info, setCardInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const splitedArr = data.content_url?.split('/');
      if (splitedArr?.length > 3) {
        const issue_number = splitedArr.slice(-1)[0]
        const repo = splitedArr.slice(-3)[0]
        const res = await apiService.getIssue(repo, issue_number)
        setCardInfo(res);
      } else {
        setCardInfo({
          title: truncate(data.note, 50),
          html_url: "",
        })
      }
    }
    fetchData();
  }, [data])

  const openLink = (url) => () => {
    window.open(url);
  }

  return <CardContainer onClick={openLink(info?.html_url)}>
    <Text>{info?.title}</Text>
    {data.new && <Flag />}
  </CardContainer>
}

function truncate(str, n) {
  return (str.length > n) ? str.substr(0, n - 1) + ' (...)' : str;
};