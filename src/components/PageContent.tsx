import React from 'react';

type Button = {
  href: string;
  label: string;
};

type Buttons = {
  buttons: Button[];
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
  const buttons = additionalData?.buttons;

  function createMarkup() {
    return { __html: content.html };
  }

  return (
    <>
      <div className="summary">{summary}</div>
      <div className="content" dangerouslySetInnerHTML={createMarkup()} />

      {buttons &&
        buttons.map(button => (
          <a
            key={button.href}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            title={button.label}
            style={{ marginBottom: 10 }}>
            <button className="btn btn-citizennext" title={button.label}>
              {button.label}
            </button>
          </a>
        ))}
    </>
  );
}
