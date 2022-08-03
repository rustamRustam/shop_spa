import React, {useRef, useEffect} from 'react';

export default function CardFram(props) {
  const cardIfram = useRef(null);


  useEffect(() => {
    let _button = null;
    let iframeDoc = null;

    const clickButton = ()=>{
      console.log('_button Click');
      if (iframeDoc) {
        console.log('Card data_card',iframeDoc.data_card);
      }
    }

    cardIfram.current.onload = ()=>{
      iframeDoc = cardIfram.current.contentWindow.document;

      _button = iframeDoc.getElementsByClassName("card-form__button")[0];
      _button.addEventListener('click', clickButton);

    }

    return () => {
      // Очистить подписку
      // if (iframeDoc) {
      //   console.log('Card data_card',iframeDoc.data_card);
      // }
      if (_button) {
        _button.removeEventListener('click', clickButton);
      }
    }
  });


  return (
    <iframe ref={cardIfram} src="/card.html" width="100%" height="500px" />
  );
};
