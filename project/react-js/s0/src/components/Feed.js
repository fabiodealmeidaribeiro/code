import React from 'react';
import Post from './Post';

export default function Feed() {
  return (
    <div>
      <Post id='post-1' postName='post 1' commentsNumber={ 100 } />
      <Post id='post-2' postName='post 2' commentsNumber={ 90 } listComments={[ 'comment one', 'comment two' ]} />
      <Post id='post-3' postName='post 3' listComments={[ 'comment one', 'comment two' ]} />
      <Post id='post-4' postName='post 4' commentsNumber={ 80 } listComments={[ 'comment one', 'comment two' ]} />
      <Post id='post-5' commentsNumber={ 75 } listComments={[ 'comment one', 'comment two' ]} />
    </div>
  );
};