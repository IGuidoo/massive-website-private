import React from 'react';

const RenderText = ({ content }) => {
  if (!Array.isArray(content)) {
    console.error("Content is not an array:", content);
    return null;
  }

  return (
    <>
      {content.map((item, index) => {
        if (typeof item === "string") {
          return <span key={index} className={item.className}>{item}</span>;
        } 

        if (item.type === "span") {
            return <span key={index} className={item.className}>{item.content}</span>;
        }

        // if (item.type === "button") {
        //   return <button key={index} className={item.className}>{item.content}</button>;
        // }
        
        else if (item.type === "link") {
          return <a key={index} href={item.href} className={item.className}>{item.content}</a>;
        }
        return null;
      })}
    </>
  );
};

export default RenderText;