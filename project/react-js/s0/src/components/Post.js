import React from 'react';
import propTypes from 'prop-types';

import './Post.css';

export default function Post(props) {

  let listComments = props['listComments'];
  let commentsNumber = props['commentsNumber'];
  let postName = props['postName'];
  let id = props['id'];

  const getID = (id) => {
    return window.document.getElementById(id);
  };
  const changeContentStyle = () => {
    getID(id).style.fontSize = '25px';
  };
  const returnContentStyle = () => {
    getID(id).style.fontSize = '16px';
  };

  return (
    <div id={ id } className="Post" onMouseOver={ changeContentStyle } onMouseOut={ returnContentStyle }>

      <p>{ postName }</p>
      <h1>Lorem Ipsum is simply dummy</h1>
      <p>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>comments ({ commentsNumber <= 100 ? commentsNumber : '99+' })</p>

      <ul>
        {
          listComments != null
          ?
            listComments.map((result, index) => (
              <li key={ 'li-' + index }>
                { result + ' do post ' + index }
              </li>
            ))
          :
            ''
        }
      </ul>
    </div>
  );
};

Post['defaultProps'] = {
  commentsNumber : 0,
  listComments : null,
  postName : null,
};

Post['propTypes'] = {
  id : propTypes.string,
  commentsNumber : propTypes.number,
  listComments : propTypes.array,
  postName : propTypes.string,
};