import React, { useEffect, useState } from 'react';
import { apiService } from '../../services/api';
import { Main, ProjectContent, Column, CardContainer, Title, Text } from './styles'

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
      <ProjectContent>
        {
          columns?.map(e =>
            <ColumnComponent data={e} onUpdate={trigger} />
          )
        }
      </ProjectContent>
      <button onClick={() => setTrigger((old) => old + 1)}>Save Columns</button>
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
    if (onUpdate > 1) {
      console.log('willupdate')
    }
  }, [onUpdate])

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
      }
    }
    fetchData();
  }, [data])

  const openLink = (url) => () => {
    window.open(url);
  }

  return <CardContainer onClick={openLink(info?.html_url)} isNew={data.new}>
    <Text>{info?.title}</Text>
  </CardContainer>
}