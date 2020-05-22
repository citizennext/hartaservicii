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
        buttons.map((button) => (
          <a
            key={button.href}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            title={button.label}
            className="btn btn-celeste btn-arrow w-full sm:mx-auto sm:w-2/3 lg:w-1/2 my-4">
            {button.label}
          </a>
        ))}
    </>
  );
}
