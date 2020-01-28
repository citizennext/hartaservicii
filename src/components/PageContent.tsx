import React from 'react';

type Button = {
  href: string;
  label: string;
};

type Buttons = {
  button: Button;
};

type Props = {
  title: string;
  content: {
    html: string;
  };
  additionalData: Buttons;
  summary: string;
};

export function Content({ content, summary, additionalData }: Props) {
  const button = additionalData.button;

  function createMarkup() {
    return { __html: content.html };
  }

  return (
    <>
      <div className="summary">{summary}</div>
      <div className="content" dangerouslySetInnerHTML={createMarkup()} />
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      <button className="btn btn-citizennext" title={button.label} onClick={event => (window.location.href = button.href)}>
        {button.label}
      </button>
    </>
  );
}
