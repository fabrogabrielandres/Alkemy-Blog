import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Skeleton } from '../Skeleton';
import NewMessage from './NewMessage';

const Message = lazy(() => import('./Export'));

const MessageComponent = () => {
  const [allMessage, setAllMessage] = useState(JSON.parse(localStorage.getItem('allMessage')) || []);

  const saveInLocal = (message) => {
    console.log(message);
    setAllMessage([...allMessage, message])
  }

  useEffect(() => {
    localStorage.setItem('allMessage', JSON.stringify(allMessage))
  }, [allMessage])

  return (
    <Suspense fallback={<Skeleton type='Dots' />}>
      <NewMessage saveInLocal={saveInLocal} />
      <Message allMessage={allMessage} />
    </Suspense>
  );
}

export default MessageComponent;