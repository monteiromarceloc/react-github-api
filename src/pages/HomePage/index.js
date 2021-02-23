import React, { useCallback, useEffect, useState } from 'react';
import { apiService } from '../../services/api';
import { Main, ProjectContent, Column, CardContainer, Title, Text, Button, Flag } from './styles'

function HomePage() {
  const [project, setProject] = useState();
  const [columns, setColumns] = useState();
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiService.getColumns()
      setColumns(res);
    }
    fetchData()
  }, [])

  return (
    <Main>
      <h1>Cifra Club Mobile - Downstream</h1>
      <Button onClick={() => setTrigger((old) => old + 1)}>Save Columns</Button>
      <ProjectContent>
        {
          columns?.map(e =>
            <ColumnComponent data={e} onUpdate={trigger} />
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
      cards?.map(e => <CardComponent data={e} />)
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