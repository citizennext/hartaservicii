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
  const button = additionalData?.button;

  function createMarkup() {
    return { __html: content.html };
  }

  return (
    <>
      <div className="summary">{summary}</div>
      <div className="content" dangerouslySetInnerHTML={createMarkup()} />

      {button && (
        <a href={button.href} target="_blank" rel="noopener noreferrer" title={button.label}>
          <button className="btn btn-citizennext" title={button.label}>
            {button.label}
          </button>
        </a>
      )}
    </>
  );
}
