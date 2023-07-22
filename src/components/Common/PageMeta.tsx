import * as React from 'react'
import { FunctionComponent } from 'react'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
}

const Metadata: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
}) {
  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale: 1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summart" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@사용자이름" />
      <meta name="twitter:creator" content="@사용자이름" />

      <html lang="ko" />
    </>
  )
}

export default Metadata
