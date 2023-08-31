import React from 'react';

function card(props) {
  const {name, email, userName} = props;
  return(
    <div className='tc bg-light-blue br3 ma2 dib grow bw2 shadow-5'>
      <img alt="https://robohash.org/test" src= {`https://robohash.org/${props.id}?set=set2&size=100x100`}></img>
      <div>
        <h2>{name}</h2>
        <p>
        Email: {email}<br></br>
        UserName: {userName}
        </p>
      </div>
    </div>
  );
}
export default card;

